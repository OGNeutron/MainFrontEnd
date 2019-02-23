import * as React from 'react'
import { Maybe, MyCommentFragmentReplies } from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'
import { MyComment } from '../views/Comment'

interface IProps {
	replies: Maybe<MyCommentFragmentReplies[]>
	pageId: string
	currentUser: IUser
	offset: number
}

// const styles = {
// 	CommentContent: {
// 		marginTop: '1rem'
// 	}
// }

function ReplyComments({ replies, pageId, currentUser, offset }: IProps): JSX.Element {
	return (
		<React.Fragment>
			{replies !== null
				? replies.map(reply => (
						<MyComment
							offset={offset}
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
