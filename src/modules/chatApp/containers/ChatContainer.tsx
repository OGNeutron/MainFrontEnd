import * as React from 'react'
import { ChildDataProps, Query } from 'react-apollo'
import { RouteComponentProps } from 'react-router-dom'
// import { compose } from 'recompose'

import ChatComponent from '../components/ChatComponent'
import MemberBar from '../components/MemberBar'
import TeamBar from '../components/TeamBar'
import { ChatLayout } from '../styles'
import { SHOW_TEAM_QUERY } from '../graphql/server'
// import { checkLoading } from '../../../utils/recompose'
// import { Spinner } from '../../../utils/components/animations/loader'
import {
	ShowTeamQuery,
	ShowTeamQueryVariables,
	ShowTeamQuery_showTeam
} from '../../../operation-result-types'

interface IProps {
	data: {
		showTeam: ShowTeamQuery_showTeam
	}
}

class ChatContainer extends React.Component<
	ChildDataProps<IProps> &
		RouteComponentProps<{ channel: string; team: string }>
> {
	render() {
		const channelSlug = this.props.match.params.channel

		let channelId: string
		let team: ShowTeamQuery_showTeam

		return (
			// @ts-ignore
			<ChatLayout>
				<Query<ShowTeamQuery, ShowTeamQueryVariables>
					query={SHOW_TEAM_QUERY}
					variables={{ teamSlug: this.props.match.params.team }}
				>
					{({ data }) => {
						if (data !== undefined) {
							team = data.showTeam
						}
						let authorId = ''
						if (team !== undefined) {
							authorId = team.author.id ? team.author.id : ''

							if (team.channels !== null && team !== null) {
								channelId = (team.channels.find(
									channel => channel.slug === channelSlug
								) as any).id
							}

							return team !== undefined ? (
								<React.Fragment>
									<TeamBar showTeam={team} {...this.props} />
									{channelId !== undefined ? (
										<ChatComponent channelId={channelId} />
									) : null}
									<MemberBar
										channelId={channelId}
										authorId={authorId}
										{...this.props}
										showTeam={team}
									/>
								</React.Fragment>
							) : null
						}
						return null
					}}
				</Query>
			</ChatLayout>
		)
	}
}

export default ChatContainer
