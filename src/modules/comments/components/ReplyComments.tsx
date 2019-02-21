import * as React from 'react'
import { Maybe, MyCommentFragmentReplies } from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'
import { MyComment } from '../views/Comment'

interface IProps {
	replies: Maybe<MyCommentFragmentReplies[]>
	pageId: string
	currentUser: IUser
}

// const styles = {
// 	CommentContent: {
// 		marginTop: '1rem'
// 	}
// }

function ReplyComments({ replies, pageId, currentUser }: IProps): JSX.Element {
	return (
		<React.Fragment>
			{replies !== null
				? replies.map(reply => (
						<MyComment
							reply={true}
							key={reply.id}
							comment={reply}
							currentUser={currentUser}
							pageId={pageId}
						/>
				  ))
				: null}
		</React.Fragment>
	)
}

export default ReplyComments
