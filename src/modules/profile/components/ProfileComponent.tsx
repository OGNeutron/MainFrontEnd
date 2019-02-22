import Button from '@material-ui/core/Button'
import * as React from 'react'
import { Mutation } from 'react-apollo'
import Moment from 'react-moment'
import { Card, Image } from 'semantic-ui-react'
import {
	GetProfileQueryQuery,
	Maybe,
	UnBlockUserVariables
} from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'
import {
	BLOCK_OR_UNBLOCK_USER,
	FRIEND_REQUEST_MUTATION,
	GET_PROFILE_QUERY
} from '../graphql/server'
import { Profile } from '../styles'
import CreateTeamModal from '../views/modals/CreateTeamModal'
import TeamSideBar from './TeamSideBar'

interface IProps {
	user: any
	currentUser: IUser
}

function ProfileComponent(props: IProps): JSX.Element {
	const {
		user: { username, createdAt, avatar_url, id, friend_requests, friends },
		currentUser
	} = props

	const friendRequestsBoolean = friend_requests.find((fr: any) => fr.id === currentUser.id)

	const isInFriends = friends.find((fr: any) => fr.id === currentUser.id)

	return (
		<Profile>
			<Card>
				<Image style={{ backgroundSize: 'cover', height: '200px' }} src={avatar_url.url} />
				<Card.Content>
					<Card.Header data-testid="profile-username">{username}</Card.Header>
					<Card.Meta>
						<Moment format="DD/MM/YYYY" date={new Date(createdAt)} />
					</Card.Meta>
					{currentUser.id !== id &&
					friendRequestsBoolean === undefined &&
					!isInFriends ? (
						<Card.Content extra>
							<Mutation mutation={FRIEND_REQUEST_MUTATION}>
								{mutation => {
									return (
										<Button
											onClick={() =>
												mutation({
													variables: {
														requestedId: id
													}
												})
											}
										>
											Add Friend
										</Button>
									)
								}}
							</Mutation>
							<Mutation<{}, UnBlockUserVariables> mutation={BLOCK_OR_UNBLOCK_USER}>
								{mutation => {
									return (
										<Button
											onClick={() =>
												mutation({
													variables: {
														id
													},
													update(cache, { data }) {
														const cacheData: Maybe<
															GetProfileQueryQuery
														> = cache.readQuery({
															query: GET_PROFILE_QUERY,
															variables: {
																username: currentUser.username
															}
														})

														if (
															cacheData !== null &&
															cacheData.getProfile !== null &&
															cacheData.getProfile.user !== null &&
															cacheData.getProfile.user.blockedUsers
														) {
															if (
																data !== undefined &&
																// @ts-ignore
																data.blockUser !== null
															) {
																cacheData.getProfile.user.blockedUsers.push(
																	{
																		username,
																		avatar_url,
																		id,
																		__typename: 'User'
																	}
																)

																return cache.writeQuery({
																	query: GET_PROFILE_QUERY,
																	variables: {
																		username:
																			currentUser.username
																	},
																	data: cacheData
																})
															}
														}
													}
												})
											}
										>
											Block User
										</Button>
									)
								}}
							</Mutation>
						</Card.Content>
					) : null}
					{currentUser.username === username ? (
						<React.Fragment>
							<TeamSideBar userId={id} />
							<CreateTeamModal authorId={id} />
						</React.Fragment>
					) : null}
				</Card.Content>
			</Card>
		</Profile>
	)
}

export default ProfileComponent
