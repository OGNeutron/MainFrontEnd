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

class NotificationContainer extends React.Component<
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

				const requestedUser =
					subscriptionData.data.friendRequestSubscription.node
						.friend_requests

				const user =
					subscriptionData.data.friendRequestSubscription.node
						.friend_requests[requestedUser.length - 1]

				if (user && user.username) {
					console.log('WORKING')

					toast(`Friend Request from ${user.username}`)
				}

				/* tslint:disable-next-line */
				return Object.assign({}, previousResult, {
					friend_requests: {
						...subscriptionData.data.friendRequestSubscription.node
							.friend_requests
					}
				})
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
