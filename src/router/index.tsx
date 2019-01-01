import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes as HomeRoutes } from '../modules/home/routes'
import { routes as AuthRoutes } from '../modules/authentication/routes'
// import { routes as ProfileRoutes } from '../modules/profile/routes'
// import { routes as ChatRoutes } from '../modules/chatApp/routes'
import { routes as SettingRoutes } from '../modules/Settings/routes'
import { IRoute } from '../types'
import { Spinner } from '../utils/components/animations/loader'
import { AuthRoute } from './utils'

import ProfileLayout from '../modules/profile/layouts'
import MainLayout from '../MainLayout'
import ChatAppLayout from '../modules/chatApp/layouts'

const allRoutes: IRoute[] = [
	...HomeRoutes,
	...AuthRoutes,
	// ...ProfileRoutes,
	// ...ChatRoutes,
	...SettingRoutes
]

export default (): JSX.Element => {
	// const routes =

	return (
		<React.Fragment>
			<React.Suspense fallback={Spinner}>
				<Switch>
					{allRoutes.map((route: IRoute, i: number) => {
						// console.log(route)
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
					})}
					<Route path="/main-layout" component={MainLayout} />
					<AuthRoute path="/profile" component={ProfileLayout} />
					<AuthRoute path="/chat-app" component={ChatAppLayout} />
				</Switch>
			</React.Suspense>
		</React.Fragment>
	)
}
