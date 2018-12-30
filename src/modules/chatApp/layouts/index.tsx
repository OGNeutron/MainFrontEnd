import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import ChatContainer from '../containers/ChatContainer'

export const ChatAppLayout: React.SFC<RouteComponentProps<{}>> = (
	props
): JSX.Element => (
	<React.Fragment>
		<Route
			path={`${props.match.path}/:team/:channel`}
			component={ChatContainer}
		/>
	</React.Fragment>
)
