import * as React from 'react'
import { Comment } from 'semantic-ui-react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

import { Messages } from '../types'
import styled from 'styled-components'

interface IProps {
	messages: Messages[]
}

const MessageViewLayout = styled.span`
	color: ${props => props.theme.textColour};
`

class MessageView extends React.PureComponent<IProps> {
	render() {
		const { messages } = this.props
		return (
			<Comment.Group size="large">
				{messages.map(message => {
					return (
						<Comment key={message.id}>
							<Comment.Avatar src={message.author.avatar_url.url} />
							<Comment.Content>
								<Comment.Author
									as={Link}
									to={`/profile/${message.author.username}`}
								>
									<MessageViewLayout>{message.author.username}</MessageViewLayout>
								</Comment.Author>
								<Comment.Metadata>
									<MessageViewLayout>
										<Moment fromNow date={new Date(message.createdAt)} />
									</MessageViewLayout>
								</Comment.Metadata>
								<Comment.Text>
									<MessageViewLayout>{message.body}</MessageViewLayout>
								</Comment.Text>
							</Comment.Content>
						</Comment>
					)
				})}
			</Comment.Group>
		)
	}
}

export default MessageView
