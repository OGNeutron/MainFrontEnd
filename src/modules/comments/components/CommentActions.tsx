import { remove } from 'lodash'
import * as React from 'react'
import { ChildMutateProps, graphql } from 'react-apollo'
import { Comment } from 'semantic-ui-react'
import {
	MyCommentFragmentFragment,
	MyCommentFragmentReplies
} from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'
import { COMMENTS_QUERY, DELETE_COMMENT_MUTATION } from '../graphql/server'
import { CommentListLayout } from '../styles'
import CreateReply from './CreateReply'
import EditComment from './EditComment'

interface IProps {
	comment: MyCommentFragmentFragment | MyCommentFragmentReplies
	currentUser: IUser
	pageId: string
	reply: boolean
	parentId: string
	offset: any
}

const CommentActions: React.FC<ChildMutateProps<IProps>> = ({
	mutate,
	comment,
	currentUser,
	parentId,
	reply,
	pageId,
	offset
}) => {
	const [editOpen, changeOpen] = React.useState(false)

	const _deleteComment = async () => {
		await mutate({
			variables: {
				id: comment.id
			},
			// optimisticResponse: {
			// 	__typeName: 'Mutation',
			// 	deleteComment: {
			// 		id
			// 	}
			// },
			update(cache, { data: { deleteComment } }: any) {
				const data = cache.readQuery({
					query: COMMENTS_QUERY,
					variables: {
						parentId: pageId,
						limit: 10,
						offset
					}
				}) as any

				if (pageId === deleteComment.parentId) {
					console.log('WORKING_ONE')
					const response = data.queryComment.edges.filter(
						(comment: any) => comment.node.id !== deleteComment.id
					)
					const result = {
						queryComment: {
							pageInfo: {
								...data.queryComment.pageInfo
							},
							__typename: data.queryComment.__typename,
							edges: [...response]
						}
					}

					console.log('RESULT', result)

					cache.writeQuery({
						query: COMMENTS_QUERY,
						variables: {
							parentId,
							limit: 10,
							offset
						},
						data: result
					})
				} else {
					console.log('WORKING_TWO')
					remove(
						data.queryComment.edges.find(
							(comment: any) => comment.node.id === deleteComment.parentId
						).node.replies,
						(comment: any) => comment.id === deleteComment.id
					)

					cache.writeQuery({
						query: COMMENTS_QUERY,
						variables: {
							parentId,
							limit: 10,
							offset
						},
						data
					})
				}
			}
		})
	}

	return (
		<React.Fragment>
			{editOpen === false ? (
				<Comment.Text>
					<CommentListLayout>{comment.body}</CommentListLayout>
				</Comment.Text>
			) : (
				<EditComment toggleEdit={() => changeOpen(!editOpen)} comment={comment} />
			)}

			<Comment.Actions>
				{currentUser.id === comment.author.id ? (
					<React.Fragment>
						<Comment.Action onClick={() => changeOpen(!editOpen)}>
							<CommentListLayout>Edit</CommentListLayout>
						</Comment.Action>
						<Comment.Action onClick={_deleteComment}>
							<CommentListLayout>Delete</CommentListLayout>
						</Comment.Action>
					</React.Fragment>
				) : null}
				<CreateReply pageId={pageId} reply={reply} parentId={parentId} comment={comment} />
			</Comment.Actions>
		</React.Fragment>
	)
}

export default graphql<IProps>(DELETE_COMMENT_MUTATION)(CommentActions as any)
