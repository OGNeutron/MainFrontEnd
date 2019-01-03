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

class SubscriptionContainer extends React.Component<
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
		console.log(this.props)
		this.props.data.subscribeToMore({
			document: NOTIFICATION_SUBSCRIPTION,
			variables: { id: this.props.id },
			updateQuery(previousResult, { subscriptionData }) {
				if (!subscriptionData.data) return previousResult

				console.log('PREV', previousResult)
				console.log('data', subscriptionData)

				previousResult.fetchNotifications.unshift(
					subscriptionData.data.NotificationSubscription.node
				)

				if (
					subscriptionData.data.NotificationSubscription.node.friend_requests !==
					undefined
				) {
					const cacheData: Maybe<
						GetProfileQueryQuery
					> = they.props.client.cache.readQuery({
						query: GET_PROFILE_QUERY,
						variables: {
							username: they.props.username
						}
					})

					console.log('PRECACHE', cacheData)

					if (cacheData !== null && cacheData.getProfile !== null) {
						//@ts-ignore
						cacheData.getProfile.user.friend_requests.unshift(
							subscriptionData.data.NotificationSubscription.node
						)
					}
					console.log('POSTCACHE', cacheData)

					they.props.client.writeQuery({
						query: GET_PROFILE_QUERY,
						variables: {
							username: they.props.username
						},
						data: cacheData
					})
				}

				toast(subscriptionData.data.NotificationSubscription.node.message)
				return previousResult
			}
		})
	}

	render() {
		console.log('SC', this.props)
		return null
	}
}

export default compose(
	withApollo,
	graphql<IProps>(FETCH_NOTIFICATION_QUERY)
)(SubscriptionContainer as any)
