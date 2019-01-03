import gql from 'graphql-tag'

export const AUTHORISE_USER = gql`
	mutation ClientAuthoriseUser($loggedIn: Boolean!, $username: String!, $id: String!) {
		authoriseUser(loggedIn: $loggedIn, username: $username, id: $id) @client {
			__typename
			loggedIn
			id
			username
		}
	}
`
