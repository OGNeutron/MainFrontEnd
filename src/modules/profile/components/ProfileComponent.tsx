import * as React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Moment from 'react-moment'
import { Mutation } from 'react-apollo'
import Button from '@material-ui/core/Button'

import { Profile } from '../styles'
import { FRIEND_REQUEST_MUTATION } from '../graphql/server'
import TeamSideBar from './TeamSideBar'
import CreateTeamModal from '../views/modals/CreateTeamModal'
import { IUser } from '../../../types'

interface IProps {
	user: any
	currentUser: IUser
}

function ProfileComponent(props: IProps): JSX.Element {
	const {
		user: { username, createdAt, avatar_url, id, friend_requests, friends },
		currentUser
	} = props

	const friendRequestsBoolean = friend_requests.find(
		(fr: any) => fr.id === currentUser.id
	)

	const isInFriends = friends.find((fr: any) => fr.id === currentUser.id)

	return (
		<Profile>
			<Card>
				<Image
					style={{ backgroundSize: 'cover' }}
					src={avatar_url.url}
				/>
				<Card.Content>
					<Card.Header>{username}</Card.Header>
					<Card.Meta>
						<Moment
							format="DD/MM/YYYY"
							date={new Date(createdAt)}
						/>
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
