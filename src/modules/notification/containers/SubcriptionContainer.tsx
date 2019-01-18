import * as React from 'react'

import { ChildDataProps, WithApolloClient, graphql, compose, withApollo } from 'react-apollo'

// import { NotificationSubscriptionComponent } from '../../../apollo/components/apollo-components'
import { Observable } from 'apollo-link'
import { FETCH_NOTIFICATION_QUERY } from '../graphql/server'
import { NOTIFICATION_SUBSCRIPTION } from '../graphql/server'
import { toast } from 'react-toastify'
import { GET_PROFILE_QUERY } from '../../profile/graphql/server'
import { Maybe, GetProfileQueryQuery } from '../../../apollo/components/apollo-components'

interface IProps {
	id: string
	username: string
}

interface IState {
	subscribe: Observable<any>
}

class SubscriptionContainer extends React.PureComponent<
	ChildDataProps<IProps> & IState & WithApolloClient<IProps>
> {
	state = {
		subscribe: ''
	}

	async componentDidMount() {
		await this._subscribeToNotifications()
	}

	_subscribeToNotifications = async () => {
		let they = this
		this.props.data.subscribeToMore({
			document: NOTIFICATION_SUBSCRIPTION,
			variables: { id: this.props.id },
			updateQuery(previousResult, { subscriptionData }) {
				if (!subscriptionData.data) return previousResult

				if (previousResult.fetchNotifications !== undefined) {
					previousResult.fetchNotifications.unshift(
						subscriptionData.data.NotificationSubscription.node
					)
				}

				const subscriptionD = subscriptionData.data.NotificationSubscription

				if (
					subscriptionD.node.friend_requests !== undefined &&
					subscriptionD.node.friend_requests !== null
				) {
					const cacheGetProfileData: Maybe<
						GetProfileQueryQuery
					> = they.props.client.cache.readQuery({
						query: GET_PROFILE_QUERY,
						variables: {
							username: they.props.username
						}
					})

					if (
						cacheGetProfileData !== null &&
						cacheGetProfileData.getProfile !== null &&
						cacheGetProfileData.getProfile.user !== null &&
						cacheGetProfileData.getProfile.user.friend_requests !== null
					) {
						cacheGetProfileData.getProfile.user.friend_requests.unshift(
							subscriptionData.data.NotificationSubscription.node.friend_requests
						)
					}

					they.props.client.writeQuery({
						query: GET_PROFILE_QUERY,
						variables: {
							username: they.props.username
						},
						data: cacheGetProfileData
					})
				}

				// if (subscriptionD.node.team !== null) {
				// 	const cacheData: Maybe<
				// 		FetchNotificationsQuery
				// 	> = they.props.client.cache.readQuery({
				// 		query: FETCH_NOTIFICATION_QUERY
				// 	})

				// 	console.log('CACHEDATA', cacheData)

				// 	if (cacheData !== null && cacheData.fetchNotifications !== null) {
				// 		cacheData.fetchNotifications.unshift(
				// 			subscriptionData.data.NotificationSubscription.node
				// 		)
				// 	}

				// 	they.props.client.writeQuery({
				// 		query: FETCH_NOTIFICATION_QUERY,
				// 		data: cacheData
				// 	})
				// }

				toast(subscriptionData.data.NotificationSubscription.node.message)
				return previousResult
			}
		})
	}

	render() {
		return null
	}
}

export default compose(
	withApollo,
	graphql<IProps>(FETCH_NOTIFICATION_QUERY)
)(SubscriptionContainer as any)
