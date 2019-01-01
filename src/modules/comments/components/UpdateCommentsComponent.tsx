import * as React from 'react'

import { NewCommentSubscriptionComponent } from '../../../apollo/components/apollo-components'

interface IProps {
	pageId: string
}

export const UpdateCommentsComponent: React.SFC<IProps> = ({ pageId }): JSX.Element => (
	<NewCommentSubscriptionComponent variables={{ pageId }}>
		{({ data, loading }) => {
			console.log(data)
			console.log(loading)
			return <div />
		}}
	</NewCommentSubscriptionComponent>
)
