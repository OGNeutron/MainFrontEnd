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

export const UPDATE_PROFILE_DATA = gql`
	mutation UpdateProfile(
		$username: String
		$oldPassword: String
		$newPassword: String
		$avatar: Upload!
	) {
		updateProfile(
			username: $username
			oldPassword: $oldPassword
			newPassword: $newPassword
			avatar: $avatar
		) {
			avatar {
				url
			}
			username
		}
	}
`
