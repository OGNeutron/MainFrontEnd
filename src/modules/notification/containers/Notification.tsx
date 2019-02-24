import * as React from 'react'
import { Feed, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { FetchNotificationsComponent } from '../../../apollo/components/apollo-components'
import { Spinner } from '../../../utils/components/animations/loader'
import { NotificationFeed } from '../components/NotificationFeed'

const Splash = styled.div`
	color: black;
`
const NotificationContainer: React.FunctionComponent = () => {
	return (
		<React.Suspense fallback={Spinner}>
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

						console.log('DATA', data)

						return loading === false && data !== null ? (
							<Feed>
								{data.fetchNotifications.length > 0 ? (
									data.fetchNotifications.map(notification => {
										if (
											notification.team !== null &&
											notification.channel !== null
										) {
											const { createdAt } = notification.team
											const { slug } = notification.channel

											if (notification.message) {
												return (
													<NotificationFeed
														id={notification.id}
														key={notification.id}
														teamUrl={`chat-app/${
															notification.team.slug
														}/${slug}`}
														date={createdAt}
														message={notification.message}
													/>
												)
											}
										}

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
									<Splash>Currently no notifications</Splash>
								)}
							</Feed>
						) : null
					}}
				</FetchNotificationsComponent>
			</Segment>
		</React.Suspense>
	)
}

export default NotificationContainer
