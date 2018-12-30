import * as React from 'react'
import { List, Dropdown, Divider, Button } from 'semantic-ui-react'
import { ChildProps, Query, Mutation, MutationFn } from 'react-apollo'
import { Link } from 'react-router-dom'

import { TeamBarLayout } from '../styles'
import CreateChannelModal from '../views/modal/CreateChannelModal'
import { IChannel } from '../types'
import { USER_SEARCH } from '../../shared/graphql/server'
import { ADD_TEAM_MEMBER } from '../graphql/server'
import {
	AddTeamMemberMutation,
	AddTeamMemberMutationVariables
} from '../../../operation-result-types'

interface IProps {
	showTeam: {
		channels: IChannel[]
		slug: string
		id: string
	}
}

class TeamBar extends React.PureComponent<ChildProps<any> & IProps> {
	state = {
		value: undefined,
		submit: false,
		key: ''
	}

	_handleChange = async (_: any, { value, options }: any) => {
		const key = options.find(option => option.text === value).key
		this.setState({ value, key })
	}

	_handleSubmit = async (
		mutate: MutationFn<
			AddTeamMemberMutation,
			AddTeamMemberMutationVariables
		>
	): Promise<void> => {
		const { value, key } = this.state
		console.log(value, key)

		const response = await mutate({
			variables: {
				userId: key,
				teamId: this.props.showTeam.id
			}
		})

		console.log(response)
	}

	render() {
		const channels = this.props.showTeam.channels
		const teamSlug = this.props.showTeam.slug
		const teamId = this.props.showTeam.id
		const members = this.props.showTeam.members
		const admin = this.props.showTeam.author.username
		return (
			<TeamBarLayout>
				<h2>Team bar</h2>
				<CreateChannelModal
					teamId={teamId as any}
					teamSlug={teamSlug as any}
				/>
				<Query query={USER_SEARCH}>
					{({ data, loading }) => {
						let users: any = []

						if (
							data !== undefined &&
							data.queryUsers !== undefined
						) {
							const usernames: [
								{ key: any; value: any; text: any }
							] = data.queryUsers
								.map(user => {
									return {
										key: user.id,
										value: user.username,
										text: user.username
									}
								})
								.filter(user => user.value !== admin)
								.filter(user => {
									for (const member of members) {
										if (member.username === user.value) {
											return (
												user.value !== member.username
											)
										}
									}
									return null
								})

							// const combineArrays = usernames.concat(members)
							// console.log('ARRAYS', combineArrays)
							users = usernames
						}

						return loading === false ? (
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
														this._handleSubmit(
															mutate
														)
													}
												>
													Add User
												</Button>
											)
										}}
									</Mutation>
								) : null}
								<Divider />
								<h2>Members</h2>
								<List>
									<List.Item>
										ADMIN: {` `}
										<Link to={`/profile/${admin}`}>
											{admin}
										</Link>
									</List.Item>
									{members.map(member => (
										<List.Item key={member.id}>
											<Link
												to={`/profile/${
													member.username
												}`}
											>
												{member.username}
											</Link>
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
							<Link to={`/chat-app/${teamSlug}/${channel.slug}`}>
								{channel.name}
							</Link>
						</List.Item>
					))}
				</List>
			</TeamBarLayout>
		)
	}
}

export default TeamBar
