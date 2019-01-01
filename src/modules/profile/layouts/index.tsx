import * as React from 'react'
import { Route } from 'react-router-dom'

import ProfileContainer from '../containers'

import { Spinner } from '../../../utils/components/animations/loader'

const ProfileLayout: React.SFC = ({ match: { path } }: any): JSX.Element => (
	<React.Suspense fallback={Spinner}>
		<Route exact path={`${path}/:username`} component={ProfileContainer} />
	</React.Suspense>
)

export default ProfileLayout
