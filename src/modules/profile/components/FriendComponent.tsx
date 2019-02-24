import * as React from 'react'
import { ChildDataProps, ChildMutateProps, compose, graphql } from 'react-apollo'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card, Image, List } from 'semantic-ui-react'
import styled from 'styled-components'
// import UserSearch from '../../shared/components/UserSearch'
// import { toast } from 'react-toastify'
import { FRIEND_REQUEST_SUBSCRIPTION } from '../../notification/graphql/server'
import UserSearchTwo from '../../shared/components/UserSearch2'
import { ADD_FRIEND_MUTATION, GET_PROFILE_QUERY, REJECT_FREIND_MUTATION } from '../graphql/server'
import { FriendsLayout } from '../styles'

const HeaderTwo = styled.h2`
	color: black;
`

interface IProps {
	user: any
	addFriend: ({  }: { variables: any; update: any }) => any
	rejectFriend: ({  }: { variables: any; update: any }) => any
	currentUser: any
	username: string
}

class FriendContainer extends React.PureComponent<
	ChildMutateProps<ChildDataProps<IProps & RouteComponentProps<{}>>>
> {
	state = {
		subscribe: '',
		value: ''
	}

	async componentDidMount() {
		await this._subscribeFriendRequest()
	}

	_subscribeFriendRequest = async () => {
		this.props.data.subscribeToMore({
			document: FRIEND_REQUEST_SUBSCRIPTION,
			variables: {
				id: this.props.currentUser.id
			},
			updateQuery(previousResult, { subscriptionData }) {
				if (!subscriptionData.data) return previousResult

				console.log('SUBSCRIPTION_DATA', subscriptionData)

				const currentFriendRequest = previousResult.getProfile.user.friend_requests
				const newFriendRequest =
					subscriptionData.data.friendRequestSubscription.node.friend_requests

				const friend_requests = [...currentFriendRequest, ...newFriendRequest]

				if (friend_requests.length <= 0) {
					return previousResult
				}

				if (currentFriendRequest.some(fr => fr.id === newFriendRequest[0].id)) {
					return previousResult
				}

				if (!currentFriendRequest.some(fr => fr.id === newFriendRequest[0].id)) {
					toast(`Friend Request from ${newFriendRequest[0].username}`)
				}

				return {
					getProfile: {
						...previousResult.getProfile,
						user: {
							...previousResult.getProfile.user,
							friend_requests: [...friend_requests]
						}
					}
				}
			}
		}) as any
	}

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

				data.getProfile.user.friend_requests.splice(
					data.getProfile.user.friend_requests.findIndex((e: any) => e.id === id)
				)

				data.getProfile.user.friends.push(addFriend.user)

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

				for (let i = 0; i < store.getProfile.user.friend_requests.length; i++) {
					if (store.getProfile.user.friend_requests[i].id === id) {
						store.getProfile.user.friend_requests.splice(i, 1)
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

	_handleChange = args => {
		// this.setState({ value: args.value })

		this.props.history.push(`/profile/${args.value}`)
	}

	render() {
		const { user, currentUser } = this.props

		return (
			<FriendsLayout>
				<Card>
					<Card.Content>
						{/* <UserSearch currentUser={currentUser} /> */}

						<UserSearchTwo currentUser={currentUser} onChange={this._handleChange} />

						{this.state.value !== '' ? <Button>{this.state.value}</Button> : null}

						{currentUser.id === user.id ? (
							user.friend_requests.length > 0 ? (
								<React.Fragment>
									<HeaderTwo>Friend Requests</HeaderTwo>
									<List>
										{user.friend_requests.map(request => (
											<List.Item key={request.id}>
												<span style={{ color: 'black' }}>
													{request.username}
												</span>
												<Button onClick={() => this._addFriend(request.id)}>
													Accept
												</Button>
												<Button
													onClick={() => this._rejectFriend(request.id)}
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
								<HeaderTwo>Friends</HeaderTwo>
								<List selection verticalAlign="middle">
									{user.friends.map(friend => (
										<List.Item key={friend.id}>
											<Image
												style={{ width: '50px' }}
												src={friend.avatar_url.url}
											/>
											<List.Content>
												<List.Header>
													<Link to={`/profile/${friend.username}`}>
														{friend.username}
													</Link>
												</List.Header>
											</List.Content>
										</List.Item>
									))}
								</List>
							</React.Fragment>
						) : (
							<h4 style={{ color: 'black' }}>Just search for people to add</h4>
						)}
					</Card.Content>
				</Card>
			</FriendsLayout>
		)
	}
}

export default compose(
	withRouter,
	graphql<IProps>(REJECT_FREIND_MUTATION, { name: 'rejectFriend' }),
	graphql<IProps>(ADD_FRIEND_MUTATION, { name: 'addFriend' }),
	graphql<IProps>(GET_PROFILE_QUERY, {
		options: (props: IProps) => ({
			variables: { username: props.user.username }
		})
	})
)(FriendContainer)
