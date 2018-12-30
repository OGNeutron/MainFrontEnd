import * as React from 'react'
import { Card, List, Button } from 'semantic-ui-react'
import { graphql, ChildMutateProps, compose } from 'react-apollo'
import { Link } from 'react-router-dom'
import { Image } from 'rebass'

import { FriendsLayout } from '../styles'
import { IProfile } from '../types'
import {
	ADD_FRIEND_MUTATION,
	REJECT_FREIND_MUTATION,
	GET_PROFILE_QUERY
} from '../graphql/server'
import UserSearch from '../../shared/components/UserSearch'

interface IProps {
	user: IProfile
	addFriend: ({  }: { variables: any; update: any }) => any
	rejectFriend: ({  }: { variables: any; update: any }) => any
	currentUser: any
}

class FriendContainer extends React.Component<ChildMutateProps<IProps>> {
	_addFriend = async (id: any) => {
		const username = this.props.currentUser.username
		await this.props.addFriend({
			variables: {
				requestedId: id
			},
			update(cache: any, { data: { addFriend } }: any) {
				const data = cache.readQuery({
					query: GET_PROFILE_QUERY,
					variables: { username }
				})

				data.getProfile.friend_requests.splice(
					data.getProfile.friend_requests.findIndex(
						(e: any) => e.id === id
					)
				)

				console.log('CHANGED_USER', data)
				console.log('ADDFRIEND', addFriend)

				data.getProfile.friends.push(addFriend.user)

				console.log(data)
				cache.writeQuery({
					uery: GET_PROFILE_QUERY,
					variables: { username },
					data
				})
			}
		})
	}

	_rejectFriend = async (id: any) => {
		const username = this.props.currentUser.username
		await this.props.rejectFriend({
			variables: {
				id
			},
			update(cache: any, _: any) {
				const store = cache.readQuery({
					query: GET_PROFILE_QUERY,
					variables: {
						username
					}
				})

				for (
					let i = 0;
					i < store.getProfile.friend_requests.length;
					i++
				) {
					if (store.getProfile.friend_requests[i].id === id) {
						store.getProfile.friend_requests.splice(i, 1)
					}
				}

				cache.writeQuery({
					query: GET_PROFILE_QUERY,
					variables: {
						username
					},
					data: store
				})
			}
		})
	}

	render() {
		const { user, currentUser } = this.props
		return (
			<FriendsLayout>
				<Card>
					<Card.Content>
						<UserSearch />

						{currentUser.id === user.id ? (
							user.friend_requests.length > 0 ? (
								<React.Fragment>
									<h2>Friend Requests</h2>
									<List>
										{user.friend_requests.map(request => (
											<List.Item key={request.id}>
												{request.username}
												<Button
													onClick={() =>
														this._addFriend(
															request.id
														)
													}
												>
													Accept
												</Button>
												<Button
													onClick={() =>
														this._rejectFriend(
															request.id
														)
													}
												>
													Reject
												</Button>
											</List.Item>
										))}
									</List>
								</React.Fragment>
							) : null
						) : null}

						{user.friends.length > 0 ? (
							<React.Fragment>
								<h2>Friends</h2>
								<List>
									{user.friends.map(friend => (
										<List.Item key={friend.id}>
											<Image
												src={friend.avatar_url.url}
											/>
											<Link
												to={`/profile/${
													friend.username
												}`}
											>
												{friend.username}
											</Link>
										</List.Item>
									))}
								</List>
							</React.Fragment>
						) : (
							<h4>Just search for people to add</h4>
						)}
					</Card.Content>
				</Card>
			</FriendsLayout>
		)
	}
}

export default compose(
	graphql<IProps>(REJECT_FREIND_MUTATION, { name: 'rejectFriend' }),
	graphql<IProps>(ADD_FRIEND_MUTATION, { name: 'addFriend' })
)(FriendContainer)
