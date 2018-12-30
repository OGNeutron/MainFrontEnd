import * as React from 'react'
import { graphql, ChildDataProps, compose } from 'react-apollo'
import { RouteComponentProps } from 'react-router-dom'
import {
	// GetProfileQueryQuery,
	GetProfileQueryComponent
} from '../../../apollo/components/apollo-components'

import { GET_PROFILE_QUERY } from '../graphql/server'

import { Spinner } from '../../../utils/components/animations/loader'
import { ProfileLayout, CommentLayout } from '../styles'
import ProfileComponent from '../components/ProfileComponent'
import FriendComponent from '../components/FriendComponent'
import CommentContainer from '../../comments'

import { CURRENT_USER_QUERY } from '../../../utils/graphql/server'
import { GetProfileQuery } from '../../../operation-result-types'
// import { FRIEND_REQUEST_SUBSCRIPTION } from '../../notification/graphql/server'
// import { toast } from 'react-toastify'
// import { toast } from 'react-toastify'

interface IProps {
	currentUser: any
	getProfile: any
}

const ProfileContainer: React.SFC<
	ChildDataProps<IProps, GetProfileQuery> &
		RouteComponentProps<{ username: string }>
> = (props): JSX.Element => {
	const {
		currentUser: { currentUser }
	} = props

	// console.log('GETPROFILE', getProfile)

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
				// 		console.log('SUBSCRIPTION_DATA')
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
				// 			console.log('WORKING')

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

				return loading ? (
					<Spinner />
				) : (
					<ProfileLayout>
						<ProfileComponent
							currentUser={currentUser}
							user={data.getProfile}
						/>
						<CommentLayout>
							<CommentContainer
								currentUser={currentUser}
								// @ts-ignore
								pageId={data.getProfile.id}
							/>
						</CommentLayout>

						<FriendComponent
							currentUser={currentUser}
							user={data.getProfile}
						/>
					</ProfileLayout>
				)
			}}
		</GetProfileQueryComponent>
	)
}

export default compose(graphql(CURRENT_USER_QUERY, { name: 'currentUser' }))(
	ProfileContainer
)
