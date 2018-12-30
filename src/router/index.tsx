import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes as HomeRoutes } from '../modules/home/routes'
import { routes as AuthRoutes } from '../modules/authentication/routes'
import { routes as ProfileRoutes } from '../modules/profile/routes'
import { routes as ChatRoutes } from '../modules/chatApp/routes'
import { routes as SettingRoutes } from '../modules/Settings/routes'
import MainLayout from '../MainLayout'
import { IRoute } from '../types'
import { AuthRoute } from './utils'

const allRoutes: IRoute[] = [
	...HomeRoutes,
	...AuthRoutes,
	...ProfileRoutes,
	...ChatRoutes,
	...SettingRoutes
]

export default (): JSX.Element => {
	const routes = allRoutes.map((route: IRoute, i: number) => {
		if (route.guest === false) {
			return <AuthRoute key={`${i}-${route.path}`} {...route} />
		}
		return (
			<Route
				key={`${i}-${route.path}`}
				path={route.path}
				component={route.component}
			/>
		)
	})

	return (
		<React.Fragment>
			<Switch>
				{routes}
				<Route path="/main-layout" component={MainLayout} />
			</Switch>
		</React.Fragment>
	)
}
