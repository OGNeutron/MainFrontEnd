import * as React from 'react'
import { Route } from 'react-router-dom'
import HomeContainer from '../containers'

export const HomeLayout = (props: any) => (
	<div>
		<Route path={`${props.match.url}/`} component={HomeContainer} />
	</div>
)
