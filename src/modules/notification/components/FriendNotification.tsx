import * as React from 'react'
import { Subscription } from 'react-apollo'
import { NOTIFICATION_SUBSCRIPTION } from '../graphql/server'
// import { GET_PROFILE_QUERY } from '../../profile/graphql/server'
import { toast } from 'react-toastify'

interface IProps {
	username: string
	id: string
}

class FriendNotification extends React.Component<IProps> {
	render() {
		return (
			<React.Fragment>
				<Subscription
					subscription={NOTIFICATION_SUBSCRIPTION}
					variables={{ id: this.props.id }}
				>
					{response => {
						if (response.data !== undefined) {
							return toast('friend accepted')
						}
						return null
					}}
				</Subscription>
			</React.Fragment>
		)
	}
}

export default FriendNotification
