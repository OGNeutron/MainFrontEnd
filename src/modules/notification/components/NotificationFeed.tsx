import * as React from 'react'

import Moment from 'react-moment'

import { Feed, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {
	DeleteNotificationComponent,
	Maybe,
	FetchNotificationsQuery
} from '../../../apollo/components/apollo-components'
import { FETCH_NOTIFICATION_QUERY } from '../graphql/server'

interface IProps {
	id: string
	avatar: string
	username: string
	date: string
	message: string
	friendRequestId: string
}

export const NotificationFeed: React.SFC<IProps> = ({
	id,
	avatar,
	message,
	username,
	date
	// friendRequestId
}): JSX.Element => (
	<Feed.Event>
		<Feed.Label>
			<img src={avatar} />
		</Feed.Label>
		<Feed.Content>
			<Feed.Summary>
				<Feed.User as={Link} to={`/profile/${username}`}>
					{username}
				</Feed.User>
				<Feed.Extra text>{message}</Feed.Extra>
				<Feed.Date>
					<Moment fromNow date={new Date(date)} />
				</Feed.Date>
				<Feed.Meta>
					<DeleteNotificationComponent>
						{mutate => (
							<Feed.Like>
								<Button
									onClick={async () => {
										try {
											await mutate({
												variables: {
													id
												},
												update(cache) {
													const cacheData: Maybe<
														FetchNotificationsQuery
													> = cache.readQuery({
														query: FETCH_NOTIFICATION_QUERY
													})

													if (
														cacheData !== null &&
														cacheData.fetchNotifications !== null &&
														cacheData.fetchNotifications !== null
													) {
														// @ts-ignore
														const result = cacheData.fetchNotifications.filter(
															nt => nt.id !== id
														)

														const response = {
															fetchNotifications: [...result]
														}

														cache.writeQuery({
															query: FETCH_NOTIFICATION_QUERY,
															data: response
														})
													}
												}
											})
										} catch (error) {
											console.error(error)
										}
									}}
								>
									Delete
								</Button>
							</Feed.Like>
						)}
					</DeleteNotificationComponent>
				</Feed.Meta>
			</Feed.Summary>
		</Feed.Content>
	</Feed.Event>
)
