import * as React from 'react'
import { Comment } from 'semantic-ui-react'
import Moment from 'react-moment'

import { Messages } from '../types'

interface IProps {
	messages: Messages[]
}

class MessageView extends React.PureComponent<IProps> {
	render() {
		const { messages } = this.props
		return (
			<Comment.Group size="large">
				{messages.map(message => {
					return (
						<Comment key={message.id}>
							<Comment.Avatar
								src={message.author.avatar_url.url}
							/>
							<Comment.Content>
								<Comment.Author as="a">
									{message.author.username}
								</Comment.Author>
								<Comment.Metadata>
									<Moment
										fromNow
										date={new Date(message.createdAt)}
									/>
								</Comment.Metadata>
								<Comment.Text>{message.body}</Comment.Text>
							</Comment.Content>
						</Comment>
					)
				})}
			</Comment.Group>
		)
	}
}

export default MessageView
