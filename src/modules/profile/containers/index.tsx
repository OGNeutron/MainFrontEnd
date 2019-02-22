import * as React from 'react'
import { ChildDataProps, compose, graphql } from 'react-apollo'
import { RouteComponentProps } from 'react-router-dom'
import {
	// GetProfileQueryQuery,
	GetProfileQueryComponent
} from '../../../apollo/components/apollo-components'
import { GetProfileQuery } from '../../../operation-result-types'
import { Spinner } from '../../../utils/components/animations/loader'
import { CURRENT_USER_QUERY } from '../../../utils/graphql/server'
import CommentContainer from '../../comments'
import FriendComponent from '../components/FriendComponent'
import ProfileComponent from '../components/ProfileComponent'
import { GET_PROFILE_QUERY } from '../graphql/server'
import { CommentLayout, ProfileLayout } from '../styles'
import { BlockedOrPrivate } from '../views/BlockedOrPrivate'

// import { FRIEND_REQUEST_SUBSCRIPTION } from '../../notification/graphql/server'
// import { toast } from 'react-toastify'
// import { toast } from 'react-toastify'

interface IProps {
	currentUser: any
}

const ProfileContainer: React.FunctionComponent<
	ChildDataProps<IProps, GetProfileQuery> & RouteComponentProps<{ username: string }>
> = (props): JSX.Element => {
	const {
		currentUser: { currentUser }
	} = props

	return (
		<GetProfileQueryComponent
			query={GET_PROFILE_QUERY}
			variables={{ username: props.match.params.username }}
		>
			{({ data, loading }) => {
				// subscribeToMore({
				// 	variables: { username: props.match.params.username },
				// 	document: FRIEND_REQUEST_SUBSCRIPTION,
				// 	updateQuery(previousResult, { subscriptionData }) {
				// 		const requestedUser =
				// 			subscriptionData.data.getProfile.friend_requests

				// 		let user

				// 		if (
				// 			requestedUser &&
				// 			subscriptionData.data.getProfile.friend_requests
				// 		) {
				// 			user =
				// 				subscriptionData.data.getProfile
				// 					.friend_requests[requestedUser.length - 1]
				// 		}

				// 		if (user && user.username) {

				// 			toast(`Friend Request from ${user.username}`)
				// 		}

				// 		/* tslint:disable-next-line */
				// 		return Object.assign({}, previousResult, {
				// 			friend_requests: {
				// 				...subscriptionData.data.getProfile
				// 					.friend_requests
				// 			}
				// 		})
				// 	}
				// })

				if (!data) {
					return <Spinner />
				}

				let display: JSX.Element | undefined

				if (data.getProfile !== null && loading === false) {
					if (data.getProfile.user === null && data.getProfile.errors !== null) {
						display = (
							<BlockedOrPrivate
								username={data.getProfile.errors.username}
								message={data.getProfile.errors.message}
								avatar_url={data.getProfile.errors.avatar_url}
							/>
						)
					} else if (data.getProfile.user !== null) {
						display = (
							<React.Fragment>
								<ProfileComponent
									currentUser={currentUser}
									user={data.getProfile.user}
								/>
								<CommentLayout>
									<CommentContainer
										currentUser={currentUser}
										pageId={data.getProfile.user.id}
									/>
								</CommentLayout>

								<FriendComponent
									currentUser={currentUser}
									user={data.getProfile.user}
								/>
							</React.Fragment>
						)
					}
				}

				return loading && data !== null ? (
					<Spinner />
				) : (
					<ProfileLayout>{display}</ProfileLayout>
				)
			}}
		</GetProfileQueryComponent>
	)
}

export default compose(graphql(CURRENT_USER_QUERY, { name: 'currentUser' }))(ProfileContainer)
