import * as React from 'react'
import { Comment } from 'semantic-ui-react'
import { MyCommentFragmentFragment } from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'
import ReplyComments from '../components/ReplyComments'
import { MyComment } from './Comment'

interface IProps {
	comment: MyCommentFragmentFragment
	currentUser: IUser
	pageId: string
}

export const CommentView: React.FC<IProps> = ({ comment, currentUser, pageId }) => {
	return (
		<React.Fragment>
			<Comment as="span">
				<MyComment
					reply={false}
					key={comment.id}
					comment={comment}
					currentUser={currentUser}
					pageId={pageId}
				/>
				<Comment.Group>
					<ReplyComments
						currentUser={currentUser}
						pageId={pageId}
						replies={comment.replies}
					/>
				</Comment.Group>
			</Comment>
		</React.Fragment>
	)
}
