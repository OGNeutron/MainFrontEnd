import gql from 'graphql-tag'

export const USER_SEARCH = gql`
	query QueryUsers {
		queryUsers {
			username
			id
		}
	}
`
