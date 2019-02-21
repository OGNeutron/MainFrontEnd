import * as React from 'react'
import { ChildDataProps, ChildMutateProps, graphql } from 'react-apollo'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button, Divider, Dropdown, Grid, Icon, List } from 'semantic-ui-react'
import { ShowTeamQuery_showTeam } from '../../../operation-result-types'
import { ADD_CHANNEL_MEMBER_MUTATION } from '../graphql/server'
import { MemberBarLayout } from '../styles'
import RemoveMemberButton from '../views/RemoveMemberButton'

interface IProps {
	authorId: string
	channelId: string
	currentUser: any
	teamSlug: string
	showTeam: ShowTeamQuery_showTeam
}

class MemberBar extends React.PureComponent<
	ChildDataProps<IProps> &
		ChildMutateProps &
		RouteComponentProps<{
			channel: string
		}>
> {
	state = {
		user: {
			value: '',
			id: ''
		},
		submit: false
	}

	fetchedUsers: any[]

	_handleChange = async (_: any, { value, options }: any) => {
		const user = options.find((option: any) => option.text === value)
		this.setState({ user: { id: user.key, value: user.value } })
	}

	_handleClick = async () => {
		const {
			user: { id }
		} = this.state

		// const { teamSlug } = this.props

		// console.log('TEAM_SLUG', teamSlug)

		this.props.mutate({
			variables: {
				userId: id,
				channelId: this.props.channelId
			}
			// update(cache, { data }) {
			// 	console.log('DATA', data)
			// 	const cacheData = cache.readQuery({
			// 		query: SHOW_TEAM_QUERY,
			// 		variables: {
			// 			teamSlug
			// 		}
			// 	})

			// 	console.log(cacheData)
			// }
		})
	}

	render() {
		const { user } = this.state
		const { showTeam, currentUser, teamSlug } = this.props

		let channelsMembers
		let channelAdmin

		if (this.props.showTeam.channels) {
			channelsMembers = this.props.showTeam.channels.find(
				channel => channel.slug === this.props.match.params.channel
			)
		}

		let users: any = []

		if (showTeam.members !== null) {
			users = showTeam.members.map(userInfo => {
				return {
					key: userInfo.id,
					value: userInfo.username,
					text: userInfo.username
				}
			})

			channelAdmin = showTeam.author
		}

		let memberList

		if (channelsMembers && channelsMembers.members !== null) {
			const adminOnline =
				channelsMembers.author.username === true ? (
					<Icon style={{ color: 'green' }} name="circle" />
				) : (
					<Icon name="circle" />
				)

			memberList =
				channelsMembers.members.length !== 0 ? (
					<React.Fragment>
						{channelsMembers.members.map(member => (
							<List.Item key={member.id}>
								<Grid>
									<Grid.Column floated="left" width={5}>
										<Link to={`/profile/${member.username}`}>
											<span>
												{member.online === true ? (
													<Icon
														style={{ color: 'green' }}
														name="circle"
													/>
												) : (
													<Icon name="circle" />
												)}
											</span>
											{member.username}
										</Link>
									</Grid.Column>
									<Grid.Column floated="left" width={5}>
										{currentUser.id === channelAdmin.id ? (
											<RemoveMemberButton
												slug={teamSlug}
												channelId={this.props.channelId}
												member={member}
											/>
										) : null}
									</Grid.Column>
								</Grid>
							</List.Item>
						))}
					</React.Fragment>
				) : null

			return (
				<MemberBarLayout>
					<h2>Channel Members</h2>
					<Dropdown
						onChange={this._handleChange}
						placeholder="Search Users"
						fluid
						search
						selection
						options={users}
					/>
					{user.value !== '' ? (
						<Button onClick={this._handleClick}>{user.value}</Button>
					) : null}
					<Divider />
					<List>
						<List.Item>
							ADMIN:{' '}
							<Link to={`/profile/${channelsMembers.author.username}`}>
								<span>{adminOnline}</span>
								{channelsMembers.author.username}
							</Link>
						</List.Item>
					</List>
					{memberList}
				</MemberBarLayout>
			)
		} else {
			return null
		}
	}
}

export default graphql<ChildDataProps<IProps>>(ADD_CHANNEL_MEMBER_MUTATION)(MemberBar as any)
