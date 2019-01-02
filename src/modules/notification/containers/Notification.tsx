import * as React from 'react'
import {
	graphql,
	ChildDataProps,
	compose,
	withApollo,
	WithApolloClient
	// ApolloConsumer
} from 'react-apollo'
import { ToastContainer, toast } from 'react-toastify'

import {
	FRIEND_REQUEST_SUBSCRIPTION
	// FRIEND_SUBSCRIPTION
} from '../graphql/server'
import { Observable } from 'apollo-client/util/Observable'
import { GET_PROFILE_QUERY } from '../../profile/graphql/server'
// import FriendNotification from '../components/FriendNotification'
// import { ApolloClient } from 'apollo-client'

interface IProps {
	id: string
	username: string
}

interface IState {
	subscribe: Observable<any>
}

class NotificationContainer extends React.PureComponent<
	ChildDataProps<IProps> & IState & WithApolloClient<IProps>
> {
	state = {
		subscribe: '',
		pass: true
	}

	async componentDidMount() {
		await this._subscribeFriendRequest()
		// await this._subscribeFriend()
	}

	// async componentWillUnmount() {
	// 	this.state.subscribe.unsubcribe()
	// }

	// _subscribeFriend = async () => {
	// 	this.props.client
	// 		.subscribe({
	// 			query: FRIEND_SUBSCRIPTION,
	// 			variables: {
	// 				id: this.props
	// 			}
	// 		})
	// 		.subscribe({
	// 			next(data) {
	// 				console.log(data)
	// 			},
	// 			error(error) {
	// 				console.error(error)
	// 			}
	// 		})
	// }

	_subscribeFriendRequest = async () => {
		// console.log('PROPS', this.props)

		this.props.data.subscribeToMore({
			document: FRIEND_REQUEST_SUBSCRIPTION,
			variables: {
				id: this.props.id
			},
			updateQuery(previousResult, { subscriptionData }) {
				if (!subscriptionData.data) return previousResult

				const currentFriendRequest = previousResult.getProfile.user.friend_requests
				const newFriendRequest =
					subscriptionData.data.friendRequestSubscription.node.friend_requests

				const friend_requests = [...currentFriendRequest, ...newFriendRequest]

				if (friend_requests.length <= 0) {
					return previousResult
				}

				if (currentFriendRequest.some(fr => fr.id === newFriendRequest[0].id)) {
					return previousResult
				}

				if (!currentFriendRequest.some(fr => fr.id === newFriendRequest[0].id)) {
					toast(
						`Friend Request from ${
							subscriptionData.data.friendRequestSubscription.node.username
						}`
					)
				}

				return {
					getProfile: {
						...previousResult.getProfile,
						user: {
							...previousResult.getProfile.user,
							friend_requests: [...friend_requests]
						}
					}
				}
			}
		}) as any
	}

	render() {
		// const { id, username } = this.props

		// console.log()

		return (
			<div>
				<ToastContainer
					autoClose={5000}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable
				/>
				{/* <ApolloConsumer>
					{client => {
						console.log(client)
						return null
					}}
				</ApolloConsumer> */}
				{/* <FriendNotification username={username} id={id} /> */}
			</div>
		)
	}
}

export default compose(
	withApollo,
	graphql<IProps>(GET_PROFILE_QUERY, {
		options: (props: IProps) => ({
			variables: { username: props.username }
		})
	})
)(NotificationContainer as any)
