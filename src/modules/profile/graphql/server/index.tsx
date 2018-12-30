import gql from 'graphql-tag'

class FriendFragment {
	static fragments = {
		friend: gql`
			fragment FriendFragment on User {
				id
				username
				avatar_url {
					url
				}
			}
		`
	}
}

export const GET_PROFILE_QUERY = gql`
	query GetProfileQuery($username: String!) {
		getProfile(username: $username) {
			id
			username
			createdAt
			updatedAt
			friends {
				...FriendFragment
			}
			avatar_url {
				url
			}
			friend_requests {
				...FriendFragment
			}
		}
	}
	${FriendFragment.fragments.friend}
`

export const FRIEND_REQUEST_MUTATION = gql`
	mutation FriendRequestMutation($requestedId: ID!) {
		friendRequest(requestedId: $requestedId) {
			ok
			errors {
				path
				message
			}
		}
	}
`

export const ADD_FRIEND_MUTATION = gql`
	mutation addFriendMutation($requestedId: ID!) {
		addFriend(requestedId: $requestedId) {
			user {
				...FriendFragment
			}
			ok
			errors {
				path
				message
			}
		}
	}
	${FriendFragment.fragments.friend}
`

export const REJECT_FREIND_MUTATION = gql`
	mutation RejectFriendMutation($id: ID!) {
		friendReject(id: $id) {
			ok
			errors {
				path
				message
			}
		}
	}
`

export const CREATE_TEAM_MUTATION = gql`
	mutation CreateTeamMutation($name: String!) {
		createTeam(name: $name) {
			name
			id
			slug
			channels {
				slug
			}
		}
	}
`
