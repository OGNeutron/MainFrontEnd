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
}

interface IState {
	editOpen: boolean
}

class CommentActions extends React.Component<ChildMutateProps<IProps>, IState> {
	state = {
		editOpen: false
	}

	_toggleEdit = () => {
		this.setState(state => ({
			editOpen: !state.editOpen
		}))
	}

	_deleteComment = async () => {
		const {
			mutate,
			comment: { id },
			pageId,
			parentId
		} = this.props

		await mutate({
			variables: {
				id
			},
			update(cache, { data: { deleteComment } }: any) {
				const data = cache.readQuery({
					query: COMMENTS_QUERY,
					variables: {
						parentId: pageId,
						limit: 10,
						offset: 0
					}
				}) as any

				if (pageId === deleteComment.parentId) {
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

					cache.writeQuery({
						query: COMMENTS_QUERY,
						variables: {
							parentId,
							limit: 10,
							offset: 0
						},
						data: result
					})
				} else {
					remove(
						data.queryComment.edges.find(
							(comment: any) => comment.node.id === deleteComment.parentId
						).node.replies,
						(comment: any) => comment.id === deleteComment.id
					)

					cache.writeQuery({
						query: COMMENTS_QUERY,
						variables: {
							parentId
						},
						data
					})
				}
			}
		})
	}

	render() {
		const { comment, currentUser, parentId, reply, pageId } = this.props
		const { editOpen } = this.state

		return (
			<React.Fragment>
				{editOpen === false ? (
					<Comment.Text>
						<CommentListLayout>{comment.body}</CommentListLayout>
					</Comment.Text>
				) : (
					<EditComment toggleEdit={this._toggleEdit} comment={comment} />
				)}

				<Comment.Actions>
					{currentUser.id === comment.author.id ? (
						<React.Fragment>
							<Comment.Action onClick={this._toggleEdit}>
								<CommentListLayout>Edit</CommentListLayout>
							</Comment.Action>
							<Comment.Action onClick={this._deleteComment}>
								<CommentListLayout>Delete</CommentListLayout>
							</Comment.Action>
						</React.Fragment>
					) : null}
					<CreateReply
						pageId={pageId}
						reply={reply}
						parentId={parentId}
						comment={comment}
					/>
				</Comment.Actions>
			</React.Fragment>
		)
	}
}

export default graphql<IProps>(DELETE_COMMENT_MUTATION)(CommentActions as any)
