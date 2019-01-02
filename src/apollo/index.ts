import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
import { ApolloLink, split, from } from 'apollo-link'
import { withClientState } from 'apollo-link-state'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { onError } from 'apollo-link-error'
import { createUploadLink } from 'apollo-upload-client'
// import { persistCache } from 'apollo-cache-persist'

import { defaultState, resolvers } from './state'
import { AUTHORISE_USER } from '../modules/authentication/graphql/client'

const INVALID_CREDENTIALS = 'Invalid credentials'

const cache: InMemoryCache = new InMemoryCache()

// persistCache({
// 	cache,
// 	storage: window.localStorage
// })

const state: ApolloLink = withClientState({
	cache,
	defaults: defaultState,
	resolvers
})

// const urlHttp = 'https://my-prisma-backend.herokuapp.com/graphql'
// const urlWss = 'wss://prisma-server-2df74d7228.herokuapp.com/Prisma_backend/dev'

const apolloUploadLink = createUploadLink({
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://my-prisma-backend.herokuapp.com/graphql'
			: 'http://localhost:2000/graphql',
	credentials: 'include'
})

// const myHttpLink: HttpLink = new HttpLink({
// 	uri:
// 		process.env.NODE_ENV === 'production'
// 			? 'https://my-prisma-backend.herokuapp.com/graphql'
// 			: 'http://localhost:2000/graphql',
// 	// 'https://serene-river-93971.herokuapp.com/graphql',
// 	credentials: 'include'
// })

const wsLink = new WebSocketLink({
	uri:
		process.env.NODE_ENV === 'production'
			? 'wss://my-prisma-backend.herokuapp.com/graphql'
			: 'ws://localhost:2000/graphql',
	// uri: 'ws://serene-river-93971.herokuapp.com/graphql',
	options: {
		reconnect: true
	}
})

const afterwareLink = onError(
	// @ts-ignore
	({ operation, response, graphqlErrors = {}, networkError = {} }: any) => {
		// const status: number =
		// 	networkError && networkError.statusCode
		// 		? networkError.statusCode
		// 		: null;

		if (response) {
			if (response.errors[0]) {
				if (response.errors[0].message === INVALID_CREDENTIALS) {
					cache.writeQuery({
						query: AUTHORISE_USER,
						data: {
							loggedIn: false,
							username: '',
							id: ''
						}
					})
				}
			}
		}
	}
)

const middleware = new ApolloLink((operation, forward) => {
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			'recent-activity': localStorage.getItem('lastOnlineTime') || null
		}
	}))

	if (operation && forward) {
		return forward(operation)
	} else {
		return null
	}
})

const httpLink = from([middleware, afterwareLink, apolloUploadLink])

const link = split(
	// split based on operation type
	({ query }) => {
		const { kind, operation }: any = getMainDefinition(query)
		return kind === 'OperationDefinition' && operation === 'subscription'
	},
	wsLink,
	httpLink
)

const client = new ApolloClient({
	link: ApolloLink.from([state, link]),
	cache
})

export default client
