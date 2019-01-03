import { clone } from 'ramda'
import { CURRENT_USER_QUERY_CLIENT, CURRENT_THEME_QUERY } from './graphql/client'

interface IAuthoriseArguments {
	loggedIn: boolean
	username: string
	id: string
}

export const defaultState = {
	authorisedUser: {
		__typename: 'authorisedUser',
		loggedIn: false,
		username: '',
		id: ''
	},
	notifications: {},
	clientTheme: {
		__typename: 'clientTheme',
		theme:
			window.localStorage.getItem('client_theme') === undefined
				? 'light'
				: window.localStorage.getItem('client_theme')
	}
}

export const resolvers = {
	Mutation: {
		authoriseUser(_: any, { username, id, loggedIn }: IAuthoriseArguments, { cache }: any) {
			const data = cache.readQuery({ query: CURRENT_USER_QUERY_CLIENT })

			const clonedData = clone<any>(data)

			const changedState = {
				authorisedUser: {
					__typename: 'authorisedUser',
					...clonedData.currentUser,
					loggedIn,
					username,
					id
				}
			}

			cache.writeQuery({
				query: CURRENT_USER_QUERY_CLIENT,
				data: changedState
			})
		},
		changeTheme(_: any, { theme }: any, { cache }: any) {
			const data = cache.readQuery({ query: CURRENT_THEME_QUERY })

			const newData =
				data.clientTheme.theme === theme
					? {
							clientTheme: {
								theme: 'light',
								__typename: 'clientTheme'
							}
					  }
					: {
							clientTheme: {
								theme: 'dark',
								__typename: 'clientTheme'
							}
					  }
			window.localStorage.setItem('client_theme', newData.clientTheme.theme)

			cache.writeQuery({ query: CURRENT_THEME_QUERY, data: newData })
		}
	}
}
