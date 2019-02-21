import * as React from 'react'
import { ChildProps, Mutation, MutationFn, Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import { Button, Divider, Dropdown, Icon, List } from 'semantic-ui-react'
import {
	AddTeamMemberMutation,
	AddTeamMemberMutationVariables
} from '../../../operation-result-types'
import { USER_SEARCH } from '../../shared/graphql/server'
import { ADD_TEAM_MEMBER, SHOW_TEAM_QUERY } from '../graphql/server'
import { TeamBarLayout } from '../styles'
import { IChannel } from '../types'
import CreateChannelModal from '../views/modal/CreateChannelModal'
import RemoveMemberButton from '../views/RemoveTeamMember'

interface IProps {
	showTeam: {
		channels: IChannel[]
		slug: string
		id: string
	}
	currentUser: any
}

class TeamBar extends React.PureComponent<ChildProps<any> & IProps> {
	state = {
		value: undefined,
		submit: false,
		key: '',
		modalOpen: false
	}

	toggleModal = () => {
		this.setState({ modalOpen: !this.state.modalOpen })
	}

	_handleChange = async (_: any, { value, options }: any) => {
		const key = options.find(option => option.text === value).key
		this.setState({ value, key })
	}

	_handleSubmit = async (
		mutate: MutationFn<AddTeamMemberMutation, AddTeamMemberMutationVariables>
	): Promise<void> => {
		const { key } = this.state

		const {
			showTeam: { slug }
		} = this.props

		await mutate({
			variables: {
				userId: key,
				teamId: this.props.showTeam.id
			},
			refetchQueries: [
				{
					query: SHOW_TEAM_QUERY,
					variables: {
						teamSlug: slug
					}
				}
			]
			// update(cache, { data }) {
			// 	console.log('DATA', data)
			// 	const cacheData = cache.readQuery({
			// 		query: SHOW_TEAM_QUERY,
			// 		variables: {
			// 			teamSlug: slug
			// 		}
			// 	})
			// 	console.log('CACHE DATA', cacheData)
			// }
		})
	}

	render() {
		const channels = this.props.showTeam.channels
		const teamSlug = this.props.showTeam.slug
		const teamId = this.props.showTeam.id
		const members = this.props.showTeam.members
		const admin = this.props.showTeam.author.username
		const adminId = this.props.showTeam.author.id
		const adminOnline =
			this.props.showTeam.author.online == true ? (
				<Icon style={{ color: 'green' }} name="circle" />
			) : (
				<Icon name="circle" />
			)

		const { currentUser } = this.props

		return (
			<TeamBarLayout>
				<h2>Team bar</h2>
				<CreateChannelModal
					toggleModal={this.toggleModal}
					teamId={teamId as any}
					teamSlug={teamSlug as any}
					modalOpen={this.state.modalOpen}
				/>
				<Query query={USER_SEARCH}>
					{({ data, loading, error }) => {
						let users: any = []

						if (error) {
							return <div>An error has occurred: ${error.message}</div>
						}

						if (data !== undefined && data.queryUsers !== undefined) {
							const usernames: [{ key: any; value: any; text: any }] = data.queryUsers
								.map(user => {
									return {
										key: user.id,
										value: user.username,
										text: user.username
									}
								})
								.filter(user => user.value !== admin)
								.filter(user => {
									const users: any = []
									for (const member of members) {
										if (member.username !== user.member) {
											users.push(user)
										}
									}
									return users
								})

							// const combineArrays = usernames.concat(members)
							users = usernames
						}

						return loading === false ? (
							<React.Fragment>
								{currentUser.id === adminId ? (
									<React.Fragment>
										<Dropdown
											style={{ marginTop: '1rem' }}
											onChange={this._handleChange}
											placeholder="Search Users"
											fluid
											search
											selection
											options={users}
										/>

										{this.state.value !== undefined ? (
											<Mutation<
												AddTeamMemberMutation,
												AddTeamMemberMutationVariables
											>
												mutation={ADD_TEAM_MEMBER}
											>
												{mutate => {
													return (
														<Button
															style={{
																marginTop: '1rem'
															}}
															onClick={() =>
																this._handleSubmit(mutate)
															}
														>
															Add User
														</Button>
													)
												}}
											</Mutation>
										) : null}
									</React.Fragment>
								) : null}

								<Divider />
								<List>
									<h2>Team Members</h2>
									<List.Item>
										ADMIN: {` `}
										<Link to={`/profile/${admin}`}>
											{adminOnline}
											{admin}
										</Link>
									</List.Item>
									{members.map(member => (
										<List.Item key={member.id}>
											<List.Content floated="right">
												<RemoveMemberButton
													teamId={teamId}
													member={member}
												/>
											</List.Content>
											<List.Content>
												<Link to={`/profile/${member.username}`}>
													{this.props.showTeam.author.online == true ? (
														<Icon
															style={{
																color: 'green'
															}}
															name="circle"
														/>
													) : (
														<Icon name="circle" />
													)}
													{member.username}
												</Link>
											</List.Content>
										</List.Item>
									))}
								</List>
								<Divider />
							</React.Fragment>
						) : null
					}}
				</Query>

				<List>
					{channels.map((channel: IChannel) => (
						<List.Item key={channel.id}>
							<Link to={`/chat-app/${teamSlug}/${channel.slug}`}>{channel.name}</Link>
						</List.Item>
					))}
				</List>
			</TeamBarLayout>
		)
	}
}

export default TeamBar
