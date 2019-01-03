import gql from 'graphql-tag'
import {
	MyCommentFragmentFragmentDoc,
	FriendFragmentFragmentDoc
} from '../../../../apollo/components/apollo-components'

export const FRIEND_REQUEST_SUBSCRIPTION = gql`
	subscription FriendRequestSubscription($id: ID!) {
		friendRequestSubscription(id: $id) {
			node {
				id
				username
				friend_requests {
					id
					username
					avatar_url {
						url
					}
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
					avatar_url {
						url
					}
				}
			}
		}
	}
`

export const NOTIFICATION_SUBSCRIPTION = gql`
	subscription NotificationSubscription($id: ID!) {
		NotificationSubscription(id: $id) {
			node {
				id
				message
				comments {
					...MyCommentFragment
				}
				messages {
					id
					parentId
					body
					author {
						id
						username
						online
						avatar_url {
							url
						}
					}
					createdAt
					updatedAt
				}
				friend_requests {
					...FriendFragment
					createdAt
					updatedAt
				}
				friend {
					...FriendFragment
					createdAt
					updatedAt
				}
			}
		}
	}
	${MyCommentFragmentFragmentDoc}
	${FriendFragmentFragmentDoc}
`

export const DELETE_NOTIFICATION_MUTATION = gql`
	mutation DeleteNotification($id: ID!) {
		deleteNotification(id: $id) {
			ok
			errors {
				path
				message
			}
		}
	}
`

export const FETCH_NOTIFICATION_QUERY = gql`
	query FetchNotifications {
		fetchNotifications {
			id
			message
			comments {
				...MyCommentFragment
			}
			messages {
				id
				parentId
				body
				author {
					id
					username
					online
					avatar_url {
						url
					}
				}
				createdAt
				updatedAt
			}
			friend_requests {
				...FriendFragment
				createdAt
				updatedAt
			}
			friend {
				...FriendFragment
				createdAt
				updatedAt
			}
		}
	}
	${MyCommentFragmentFragmentDoc}
	${FriendFragmentFragmentDoc}
`
