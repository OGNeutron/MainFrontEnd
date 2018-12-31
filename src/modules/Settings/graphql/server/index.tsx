import gql from 'graphql-tag'

export const SET_PROFILE_PRIVACY = gql`
	mutation SetProfilePrivacy($bool: Boolean!) {
		setProfilePrivacy(bool: $bool) {
			private
		}
	}
`

export const UN_BLOCK_USER = gql`
	mutation UnBlockUser($id: ID!) {
		unblockUser(id: $id) {
			id
			username
			avatar_url {
				url
			}
		}
	}
`
