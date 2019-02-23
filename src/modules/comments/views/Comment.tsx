import * as React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { Comment } from 'semantic-ui-react'
import {
	MyCommentFragmentFragment,
	MyCommentFragmentReplies
} from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'
import CommentActions from '../components/CommentActions'
import LikeComment from '../components/LikeComment'
import { CommentListLayout } from '../styles'

interface IProps {
	comment: MyCommentFragmentFragment | MyCommentFragmentReplies
	currentUser: IUser
	pageId: string
	reply: boolean
	offset: number
}

export const MyComment: React.FunctionComponent<IProps> = ({
	comment,
	currentUser,
	pageId,
	reply,
	offset
}): JSX.Element => (
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
		<CommentActions
			offset={offset}
			parentId={comment.parentId}
			pageId={pageId}
			reply={reply}
			comment={comment}
			currentUser={currentUser}
		/>
	</Comment.Content>
)
