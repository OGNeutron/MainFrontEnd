import * as React from 'react'
import { Route } from 'react-router-dom'
import ProfileContainer from '../containers'

const ProfileLayout: React.SFC = ({ match: { path } }: any): JSX.Element => (
	<React.Fragment>
		<Route exact path={`${path}/:username`} component={ProfileContainer} />
	</React.Fragment>
)

export default ProfileLayout
