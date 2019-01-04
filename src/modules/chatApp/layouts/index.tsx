import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import ChatContainer from '../containers/ChatContainer'

// const ChatContainer = React.lazy(() => import("../containers/ChatContainer"))

const ChatAppLayout: React.FunctionComponent<RouteComponentProps<{}>> = (props): JSX.Element => (
	<React.Fragment>
		<Route path={`${props.match.path}/:team/:channel`} component={ChatContainer} />
	</React.Fragment>
)

export default ChatAppLayout
