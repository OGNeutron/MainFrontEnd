import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, split, from } from 'apollo-link'
import { withClientState } from 'apollo-link-state'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { onError } from 'apollo-link-error'
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

const myHttpLink: HttpLink = new HttpLink({
	uri: 'http://localhost:2000/graphql',
	// uri: 'https://serene-river-93971.herokuapp.com/graphql',
	credentials: 'include'
})

const wsLink = new WebSocketLink({
	uri: 'ws://localhost:2000/graphql',
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

const httpLink = from([middleware, afterwareLink, myHttpLink])

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
