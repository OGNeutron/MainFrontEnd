import * as React from 'react'
import { Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import { CommentListLayout } from '../styles'
import LikeComment from '../components/LikeComment'
import CreateReply from '../components/CreateReply'
import ReplyComments from '../components/ReplyComments'
import EditComment from '../components/EditComment'
import { IUser } from '../../../types'
import { MyCommentFragmentFragment } from '../../../apollo/components/apollo-components'

interface IProps {
	comment: MyCommentFragmentFragment
	editOpen: boolean
	toggleEdit: () => void
	deleteComment: () => void
	currentUser: IUser
	pageId: string
}

const CommentView: React.FunctionComponent<IProps> = ({
	comment,
	editOpen,
	toggleEdit,
	deleteComment,
	currentUser,
	pageId
}): JSX.Element => (
	<Comment as="span" key={comment.id}>
		<Comment.Content
			style={{
				marginTop: '1rem'
			}}
		>
			<Comment.Author as="span">
				<Link to={`/profile/${comment.author.username}`}>{comment.author.username}</Link>
			</Comment.Author>
			<Comment.Metadata>
				<CommentListLayout>
					<Moment fromNow date={new Date(comment.createdAt)} />
					<LikeComment pageId={pageId} id={comment.id} />
					<span>{comment.ratings.vote}</span>
				</CommentListLayout>
			</Comment.Metadata>
			{editOpen === false ? (
				<Comment.Text>
					<CommentListLayout>{comment.body}</CommentListLayout>
				</Comment.Text>
			) : (
				<EditComment toggleEdit={toggleEdit} comment={comment} />
			)}

			<Comment.Actions>
				<CreateReply parentComment={comment} comment={comment} />
				{currentUser.id === comment.author.id ? (
					<React.Fragment>
						<Comment.Action onClick={toggleEdit}>
							<CommentListLayout>Edit</CommentListLayout>
						</Comment.Action>
						<Comment.Action onClick={deleteComment}>
							<CommentListLayout>Delete</CommentListLayout>
						</Comment.Action>
					</React.Fragment>
				) : null}
			</Comment.Actions>
		</Comment.Content>
		<Comment.Group>
			<ReplyComments pageId={pageId} parentComment={comment} replies={comment.replies} />
		</Comment.Group>
	</Comment>
)

export default CommentView
