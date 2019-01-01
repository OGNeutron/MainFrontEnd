import * as React from 'react'
import { graphql, ChildMutateProps, ChildDataProps } from 'react-apollo'
import { Dropdown, Button, Divider, Segment, List, Grid } from 'semantic-ui-react'
import { RouteComponentProps, Link } from 'react-router-dom'

import { MemberBarLayout } from '../styles'
import { ADD_CHANNEL_MEMBER_MUTATION } from '../graphql/server'
import { ShowTeamQuery_showTeam } from '../../../operation-result-types'
import RemoveMemberButton from '../views/RemoveMemberButton'

interface IProps {
	authorId: string
	channelId: string

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

		this.props.mutate({
			variables: {
				userId: id,
				channelId: this.props.channelId
			}
		})
	}

	_removeMember = () => {
		console.log('working')
	}

	render() {
		const { user } = this.state
		const { showTeam } = this.props

		let channelsMembers

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
		}

		let memberList

		if (channelsMembers && channelsMembers.members !== null) {
			memberList =
				channelsMembers.members.length !== 0 ? (
					<Segment>
						<List>
							{channelsMembers.members.map(member => (
								<List.Item key={member.id}>
									<Grid>
										<Grid.Column floated="left" width={5}>
											<Link to={`/profile/${member.username}`}>
												{member.username}
											</Link>
										</Grid.Column>
										<Grid.Column floated="left" width={5}>
											<RemoveMemberButton
												channelId={this.props.channelId}
												member={member}
											/>
										</Grid.Column>
									</Grid>
								</List.Item>
							))}
						</List>
					</Segment>
				) : null
		}

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
				{memberList}
			</MemberBarLayout>
		)
	}
}

export default graphql<ChildDataProps<IProps>>(ADD_CHANNEL_MEMBER_MUTATION)(MemberBar as any)
