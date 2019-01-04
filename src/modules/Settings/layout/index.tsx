import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SettingContainer from '../containers'

// const SettingContainer = React.lazy(() => import('../containers'))

export const SettingLayout: React.FunctionComponent<RouteComponentProps<{}>> = ({
	match: { path }
}): JSX.Element => <Route path={`${path}/:username`} component={SettingContainer} />
