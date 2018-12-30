import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SettingContainer from '../containers'

export const SettingLayout: React.SFC<RouteComponentProps<{}>> = ({
	match: { path }
}): JSX.Element => (
	<React.Fragment>
		<Route path={`${path}/`} component={SettingContainer} />
	</React.Fragment>
)
