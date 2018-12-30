import gql from 'graphql-tag'

export const MESSAGE_FRAGMENT = gql`
	fragment MessageFragment on Message {
		id
		parentId
		body
		author {
			username
			avatar_url {
				url
			}
		}
	}
`
