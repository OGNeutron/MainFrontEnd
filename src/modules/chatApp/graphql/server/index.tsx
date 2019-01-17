import gql from 'graphql-tag'
// import { MESSAGE_FRAGMENT } from '../../../../utils/graphql/fragments'

export const CHANNEL_MESSAGE_SUBSCRIPTION = gql`
	subscription ChannelMessageSubscription($channelId: ID!) {
		messageSubscription(channelId: $channelId) {
			node {
				id
				body
				parentId
				author {
					online
					id
					username
					avatar_url {
						url
					}
				}
				createdAt
				updatedAt
			}
		}
	}
`

export const REMOVE_TEAM_MEMBER = gql`
	mutation RemoveTeamMember($teamId: ID!, $userId: ID!) {
		removeTeamMember(teamId: $teamId, userId: $userId) {
			id
			name
			slug
			author {
				id
				username
			}
			members {
				id
				username
				email
			}
		}
	}
`

export const REMOVE_CHANNEL_MEMBER = gql`
	mutation removeChannelMemberMutation($channelId: ID!, $userId: ID!) {
		removeChannelMember(channelId: $channelId, userId: $userId) {
			id
			name
			slug
			author {
				id
				username
			}
			members {
				id
				username
				email
			}
			messages {
				id
				parentId
				body
				author {
					id
					online
					username
					avatar_url {
						url
					}
				}
				createdAt
				updatedAt
			}
		}
	}
`

export const SHOW_TEAM_QUERY = gql`
	query ShowTeamQuery($teamSlug: String!) {
		showTeam(teamSlug: $teamSlug) {
			id
			name
			slug
			moderators {
				id
				username
			}
			author {
				id
				username
				online
				avatar_url {
					url
				}
			}
			members {
				id
				username
				online
			}
			channels {
				id
				name
				slug
				author {
					id
					username
					online
				}
				members {
					id
					username
					email
					online
				}
			}
			createdAt
			updatedAt
			confirmed
			online
		}
	}
`

export const SHOW_CHANNEL_QUERY = gql`
	query ShowChannelQuery($channelId: ID!) {
		showChannel(channelId: $channelId) {
			id
			name
			slug
			members {
				id
				username
				email
				online
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
		}
	}
`

export const CREATE_CHANNEL_MUTATION = gql`
	mutation CreateChannelMutation($name: String!, $teamId: ID!) {
		createChannel(name: $name, teamId: $teamId) {
			id
			name
			slug
			members {
				id
				username
				online
			}
			author {
				id
				username
				online
				avatar_url {
					url
				}
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
		}
	}
`

export const CREATE_MESSAGE_MUTATION = gql`
	mutation CreateMessageMutation($body: String!, $channelId: ID!) {
		createMessage(body: $body, channelId: $channelId) {
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
	}
`

export const ADD_CHANNEL_MEMBER_MUTATION = gql`
	mutation AddChannelMemberMutation($userId: ID!, $channelId: ID!) {
		addChannelMember(userId: $userId, channelId: $channelId) {
			id
			name
			author {
				id
				username
				online
			}
			moderators {
				id
				username
				online
			}
			members {
				id
				username
				online
			}
		}
	}
`

export const ADD_TEAM_MEMBER = gql`
	mutation AddTeamMemberMutation($userId: ID!, $teamId: ID!) {
		addTeamMember(userId: $userId, teamId: $teamId) {
			id
			name
			author {
				id
				username
			}
			members {
				id
				username
			}
		}
	}
`
