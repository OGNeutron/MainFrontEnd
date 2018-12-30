import * as React from 'react'
import { Comment } from 'semantic-ui-react'

import CommentActions from './CommentActions'
import { IUser } from '../../../types'
import { QueryCommentEdges } from '../../../apollo/components/apollo-components'

interface IProps {
	comments: QueryCommentEdges[]
	theme?: any
	currentUser: IUser
}

function CommentList({ comments, currentUser }: IProps): JSX.Element {
	return (
		<React.Fragment>
			<Comment.Group size="large">
				{comments.map(comment => (
					<CommentActions
						currentUser={currentUser}
						key={comment.node.id}
						comment={comment.node}
					/>
				))}
			</Comment.Group>
		</React.Fragment>
	)
}

export default CommentList
