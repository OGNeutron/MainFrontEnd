import * as React from 'react'

import { Feed, Segment } from 'semantic-ui-react'
import { ChildDataProps, WithApolloClient } from 'react-apollo'
import { FetchNotificationsComponent } from '../../../apollo/components/apollo-components'

import { Observable } from 'apollo-client/util/Observable'
import { NotificationFeed } from '../components/NotificationFeed'

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
	// 			},
	// 			error(error) {
	// 			}
	// 		})
	// }

	_subscribeFriendRequest = async () => {}

	render() {
		return (
			<Segment>
				<FetchNotificationsComponent>
					{({ data, loading, error }) => {
						if (data === undefined || data === null) {
							return 'no notifications'
						}

						if (data.fetchNotifications === null) {
							return 'no notifications'
						}

						if (error) {
							return <span>An error has occurred: {error.message}</span>
						}

						return loading === false && data !== null ? (
							<Feed>
								{data.fetchNotifications.length > 0 ? (
									data.fetchNotifications.map(notification => {
										if (notification.friend_requests !== null) {
											const {
												avatar_url: { url },
												createdAt,
												username
											} = notification.friend_requests

											if (notification.message !== null) {
												return (
													<NotificationFeed
														id={notification.id}
														friendRequestId={
															notification.friend_requests.id
														}
														key={notification.id}
														avatar={url}
														date={createdAt}
														username={username}
														message={notification.message}
													/>
												)
											}
										}

										if (notification.friend !== null) {
											const {
												avatar_url: { url },
												createdAt,
												username
											} = notification.friend

											if (notification.message !== null) {
												return (
													<NotificationFeed
														id={notification.id}
														friend={notification.friend}
														key={notification.id}
														avatar={url}
														date={createdAt}
														username={username}
														message={notification.message}
													/>
												)
											}
										}
									})
								) : (
									<div>Currently no notifications</div>
								)}
							</Feed>
						) : null
					}}
				</FetchNotificationsComponent>

				{/* <ApolloConsumer>
					{client => {
						return null
					}}
				</ApolloConsumer> */}
				{/* <FriendNotification username={username} id={id} /> */}
			</Segment>
		)
	}
}

export default NotificationContainer
