import gql from 'graphql-tag'

export const CURRENT_USER_QUERY_CLIENT = gql`
	query QueryAuthorisedUser {
		authorisedUser @client {
			__typename
			loggedIn
			id
			username
		}
	}
`

export const CURRENT_THEME_QUERY = gql`
	query QueryCurrentTheme {
		clientTheme @client {
			__typename
			theme
		}
	}
`
