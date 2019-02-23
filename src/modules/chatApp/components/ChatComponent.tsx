import * as React from 'react'
import { ChildDataProps, graphql } from 'react-apollo'
import {
	// ShowTeamQuery_showTeam,
	ShowChannelQuery,
	ShowChannelQueryVariables,
	ShowChannelQuery_showChannel
} from '../../../operation-result-types'
import { Spinner } from '../../../utils/components/animations/loader'
import { CHANNEL_MESSAGE_SUBSCRIPTION, SHOW_CHANNEL_QUERY } from '../graphql/server'
import { ChatComponentLayout } from '../styles'
import { CreateMessageForm } from '../views/CreateMessgeForm'
import MessageView from '../views/MessageView'

// import { Message } from '../views/Message'

interface IProps {
	data?: {
		showChannel: ShowChannelQuery_showChannel
	}
	channelId: string
}

interface IState {
	channelId: string
}

class ChatComponent extends React.PureComponent<ChildDataProps<IProps>, IState> {
	state = {
		channelId: '',
		modalOpen: false
	}

	// @ts-ignore
	unsubscribe: () => void

	componentDidMount() {
		const { channelId } = this.props

		this.setState({ channelId })

		if (channelId !== undefined) {
			this.unsubscribe = this.props.data.subscribeToMore({
				document: CHANNEL_MESSAGE_SUBSCRIPTION,
				variables: { channelId },
				updateQuery(prev, { subscriptionData }) {
					const newMessage = [subscriptionData.data.messageSubscription.node]

					// @ts-ignore
					const result = Object.assign({}, prev, {
						showChannel: {
							...prev.showChannel,
							messages: [
								...newMessage,
								...prev.showChannel.messages
								// ...newMessage
							]
						}
					})

					return result
				}
			})
		}
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	render() {
		const { data } = this.props
		const { channelId } = this.state

		return data.loading === false ? (
			<ChatComponentLayout>
				{channelId !== undefined ? <CreateMessageForm channelId={channelId} /> : null}
				{data.showChannel.messages !== null ? (
					<MessageView messages={data.showChannel.messages} />
				) : null}
			</ChatComponentLayout>
		) : (
			<Spinner />
		)
	}
}

export default graphql<IProps, ShowChannelQuery, ShowChannelQueryVariables>(SHOW_CHANNEL_QUERY, {
	options: props => ({ variables: { channelId: props.channelId } })
})(ChatComponent as any)
