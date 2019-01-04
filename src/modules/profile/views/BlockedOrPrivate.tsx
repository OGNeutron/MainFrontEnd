import * as React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Profile } from '../styles'
import { Maybe } from '../../../apollo/components/apollo-components'

interface IProps {
	avatar_url: Maybe<{ url: string }>
	username: Maybe<string>
	message: Maybe<string>
}

export const BlockedOrPrivate: React.FunctionComponent<IProps> = ({
	avatar_url,
	username,
	message
}): JSX.Element => (
	<Profile>
		{avatar_url !== null ? (
			<Card>
				<Image
					style={{ backgroundSize: 'cover' }}
					src={avatar_url.url}
				/>
				<Card.Content>
					<Card.Header>{username}</Card.Header>
					<Card.Description>{message}</Card.Description>
				</Card.Content>
			</Card>
		) : (
			<Card>
				<Card.Content>
					<Card.Header>{username}</Card.Header>
					<Card.Description>{message}</Card.Description>
				</Card.Content>
			</Card>
		)}
	</Profile>
)
