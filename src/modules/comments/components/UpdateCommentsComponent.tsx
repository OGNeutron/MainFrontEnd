import * as React from 'react'
// import { useState } from 'react'

// import { NewCommentSubscriptionHOC } from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'

interface IProps {
	currentUser: IUser
	pageId: string
}

class UpdateCommentsComponent extends React.Component<IProps> {
	state = {
		comments: []
	}

	render() {
		// const { pageId, currentUser } = this.props
		// const { comments } = this.state

		console.log(this.props)

		// if (
		//     data !== undefined &&
		//     data.newCommentSubscription !== null &&
		//     data.newCommentSubscription.node !== null
		// ) {
		//     if (currentUser.id !== data.newCommentSubscription.node.author.id) {
		//         setComment(data.newCommentSubscription.node as any)
		//     }
		// }

		return <div />
	}
}

export default UpdateCommentsComponent
