import * as React from 'react'
import { graphql, ChildDataProps } from 'react-apollo'

import { ChatComponentLayout } from '../styles'
import {
	SHOW_CHANNEL_QUERY,
	CHANNEL_MESSAGE_SUBSCRIPTION
} from '../graphql/server'
import {
	// ShowTeamQuery_showTeam,
	ShowChannelQuery,
	ShowChannelQueryVariables,
	ShowChannelQuery_showChannel
} from '../../../operation-result-types'
import { Spinner } from '../../../utils/components/animations/loader'
import { CreateMessageForm } from '../views/CreateMessgeForm'
import MessageView from '../views/MessageView'
// import { Message } from '../views/Message'

interface IProps {
	data?: {
		showChannel: ShowChannelQuery_showChannel
	}
	channelId: string
}

class ChatComponent extends React.PureComponent<ChildDataProps<IProps>> {
	state = {
		channelId: ''
	}

	// @ts-ignore
	unsubscribe: () => void

	componentDidMount() {
		const { channelId } = this.props

		this.setState({ channelId })

		if (channelId !== undefined) {
			this.props.data.subscribeToMore({
				document: CHANNEL_MESSAGE_SUBSCRIPTION,
				variables: { channelId },
				updateQuery(prev, { subscriptionData }) {
					console.log(prev)
					console.log(subscriptionData)

					const newMessage =
						subscriptionData.data.messageSubscription.node

					// tslint:disable-next-line
					return Object.assign({}, prev, {
						showChannel: {
							...prev.showChannel,
							messages: [
								...prev.showChannel.messages,
								...newMessage
							]
						}
					})
				}
			})
		}
	}

	componentWillUnmount() {
		this.props.data.subscribeToMore({
			document: CHANNEL_MESSAGE_SUBSCRIPTION
		})
	}

	render() {
		const { data } = this.props
		const { channelId } = this.state

		return data.loading === false ? (
			<ChatComponentLayout>
				{channelId !== undefined ? (
					<CreateMessageForm channelId={channelId} />
				) : null}
				{data.showChannel.messages !== null ? (
					<MessageView messages={data.showChannel.messages} />
				) : null}
			</ChatComponentLayout>
		) : (
			<Spinner />
		)
	}
}

export default graphql<IProps, ShowChannelQuery, ShowChannelQueryVariables>(
	SHOW_CHANNEL_QUERY,
	{
		options: props => ({ variables: { channelId: props.channelId } })
	}
)(ChatComponent as any)
