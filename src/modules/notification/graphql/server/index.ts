import gql from 'graphql-tag'

export const FRIEND_REQUEST_SUBSCRIPTION = gql`
	subscription FriendRequestSubscription($id: ID!) {
		friendRequestSubscription(id: $id) {
			node {
				id
				username
				friend_requests {
					id
					username
				}
			}
		}
	}
`

export const FRIEND_SUBSCRIPTION = gql`
	subscription FriendSubscription($id: ID!) {
		friendSubscription(id: $id) {
			node {
				id
				username
				friends {
					id
					username
				}
			}
		}
	}
`

export const NOTIFICATION_SUBSCRIPTION = gql`
	subscription NotificationSubscription($id: ID!) {
		NotificationSubscription(id: $id) {
			node {
				message
			}
		}
	}
`
