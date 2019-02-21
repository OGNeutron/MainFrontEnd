import * as React from 'react'
import { Comment } from 'semantic-ui-react'
import { QueryCommentEdges } from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'
import { CommentView } from '../views/CommentView'

interface IProps {
	comments: QueryCommentEdges[]
	theme?: any
	currentUser: IUser
	pageId: string
}

function CommentList({ comments, currentUser, pageId }: IProps): JSX.Element {
	return (
		<React.Fragment>
			<Comment.Group size="large">
				{comments.map(comment => (
					<CommentView
						key={comment.node.id}
						comment={comment.node}
						currentUser={currentUser}
						pageId={pageId}
					/>
				))}
			</Comment.Group>
		</React.Fragment>
	)
}

export default CommentList
