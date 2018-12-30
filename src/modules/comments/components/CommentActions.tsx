import * as React from 'react'
import { graphql, ChildMutateProps } from 'react-apollo'

import CommentView from '../views/Comment'
import { DELETE_COMMENT_MUTATION, COMMENTS_QUERY } from '../graphql/server'
import { IUser } from '../../../types'
import { MyCommentFragmentFragment } from '../../../apollo/components/apollo-components'

interface IProps {
	comment: MyCommentFragmentFragment
	currentUser: IUser
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
			comment: { parentId, id, pageId }
		} = this.props

		console.log(id)
		await mutate({
			variables: {
				id
			},
			update(cache, { data: { deleteComment } }: any) {
				const data = cache.readQuery({
					query: COMMENTS_QUERY,
					variables: {
						parentId,
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
					const response = data.queryComment.edges
						.find(
							(comment: any) =>
								comment.node.parentId === deleteComment.parentId
						)
						.replies.filter((reply: any) => reply.id === id)

					cache.writeQuery({
						query: COMMENTS_QUERY,
						variables: {
							parentId
						},
						data: response
					})
				}
			}
		})
	}

	render() {
		const { comment, currentUser } = this.props
		const { editOpen } = this.state
		return (
			<CommentView
				currentUser={currentUser}
				comment={comment}
				toggleEdit={this._toggleEdit}
				editOpen={editOpen}
				deleteComment={this._deleteComment}
			/>
		)
	}
}

export default graphql<IProps>(DELETE_COMMENT_MUTATION)(CommentActions as any)
