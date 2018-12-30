import gql from 'graphql-tag'

export const SHOW_TEAMS_QUERY = gql`
	query ShowTeamsQuery($authorId: ID!) {
		showTeams(authorId: $authorId) {
			id
			slug
			name
			channels {
				slug
			}
		}
	}
`

export const CURRENT_USER_QUERY = gql`
	query CurrentUserQuery {
		currentUser {
			email
			id
			username
		}
	}
`
