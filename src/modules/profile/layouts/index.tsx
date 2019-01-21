import * as React from 'react'
import { Route } from 'react-router-dom'

// import ProfileContainer from '../containers'
const ProfileContainer = React.lazy(() => import('../containers'))

// const Placeholder = () => React.lazy(() => import('../containers'))

const ProfileLayout: React.FunctionComponent = ({ match: { path } }: any): JSX.Element => (
	<Route
		exact
		path={`${path}/:username`}
		component={(props: any) => <ProfileContainer {...props} />}
	/>
)

export default ProfileLayout
