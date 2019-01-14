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
import { CURRENT_USER_QUERY_CLIENT } from '../../../apollo/graphql/client'

interface IProps {
	data: {
		showTeam: ShowTeamQuery_showTeam
	}
}

const ChatContainer: React.FunctionComponent<
	ChildDataProps<IProps> & RouteComponentProps<{ channel: string; team: string }>
> = props => {
	const channelSlug = props.match.params.channel

	let channelId: string
	let team: ShowTeamQuery_showTeam

	return (
		// @ts-ignore
		<ChatLayout>
			<Query<ShowTeamQuery, ShowTeamQueryVariables>
				query={SHOW_TEAM_QUERY}
				variables={{ teamSlug: props.match.params.team }}
			>
				{({ data, error }) => {
					if (data !== undefined) {
						team = data.showTeam
					}

					if (error) {
						return <div>An error has occurred: ${error.message}</div>
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
								<TeamBar showTeam={team} {...props} />
								{channelId !== undefined ? (
									<ChatComponent channelId={channelId} />
								) : null}
								<Query query={CURRENT_USER_QUERY_CLIENT}>
									{({ loading, data }) => {
										return loading === false ? (
											<MemberBar
												teamSlug={props.match.params.team}
												currentUser={data.authorisedUser}
												channelId={channelId}
												authorId={authorId}
												{...props}
												showTeam={team}
											/>
										) : null
									}}
								</Query>
							</React.Fragment>
						) : null
					}
					return null
				}}
			</Query>
		</ChatLayout>
	)
}

export default ChatContainer
