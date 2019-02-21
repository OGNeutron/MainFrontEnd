import gql from 'graphql-tag'

class CommentFragmentClass {
	static fragments = {
		comment: gql`
			fragment MyCommentFragment on Comment {
				id
				parentId
				body
				repliedTo {
					id
					username
				}
				createdAt
				pageId
				updatedAt
				ratings {
					vote
					id
					author {
						id
						username
					}
				}
				replies {
					id
					parentId
					ratings {
						vote
						id
						author {
							id
							username
						}
					}
					body
					pageId
					repliedTo {
						id
						username
					}
					createdAt
					replies {
						id
						parentId
						ratings {
							vote
							id
							author {
								id
								username
							}
						}
						body
						pageId
						repliedTo {
							id
							username
						}
						updatedAt
						author {
							id
							username
						}
					}
					updatedAt
					author {
						id
						username
					}
				}
				author {
					id
					username
					avatar_url {
						url
					}
				}
				# errors {
				# 	path
				# 	message
				# }
			}
		`
	}
}

export const COMMENTS_SUBSCRIPTION = gql`
	subscription NewCommentSubscription($pageId: ID!) {
		newCommentSubscription(pageId: $pageId) {
			node {
				...MyCommentFragment
			}
		}
	}
	${CommentFragmentClass.fragments.comment}
`

export const COMMENT_MUTATION = gql`
	mutation CommentMutation($body: String!, $pageId: ID!, $parentId: ID!, $repliedTo: ID) {
		createComment(body: $body, pageId: $pageId, parentId: $parentId, repliedTo: $repliedTo) {
			...MyCommentFragment
		}
	}
	${CommentFragmentClass.fragments.comment}
`

export const COMMENTS_QUERY = gql`
	query QueryComment($parentId: ID!, $offset: Int, $limit: Int) {
		queryComment(parentId: $parentId, offset: $offset, limit: $limit) {
			pageInfo {
				hasPreviousPage
				endCursor
				hasNextPage
				startCursor
			}
			edges {
				node {
					...MyCommentFragment
				}
			}
		}
	}
	${CommentFragmentClass.fragments.comment}
`

export const CREATE_REPLY_MUTATION = gql`
	mutation CreateReply($body: String!, $pageId: ID!, $parentId: ID!, $repliedTo: ID) {
		createReply(body: $body, pageId: $pageId, parentId: $parentId, repliedTo: $repliedTo) {
			...MyCommentFragment
		}
	}
	${CommentFragmentClass.fragments.comment}
`

export const LIKE_COMMENT = gql`
	mutation LikeComment($commentId: ID!) {
		likeComment(commentId: $commentId) {
			...MyCommentFragment
		}
	}
	${CommentFragmentClass.fragments.comment}
`

export const EDIT_COMMENT_MUTATION = gql`
	mutation EditComment($id: ID!, $body: String!) {
		editComment(id: $id, body: $body) {
			...MyCommentFragment
		}
	}
	${CommentFragmentClass.fragments.comment}
`

export const DELETE_COMMENT_MUTATION = gql`
	mutation DeleteComment($id: ID!) {
		deleteComment(id: $id) {
			id
			parentId
		}
	}
`
