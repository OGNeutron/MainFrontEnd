import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes as AuthRoutes } from '../modules/authentication/routes'
import { routes as ChatRoutes } from '../modules/chatApp/routes'
import { routes as HomeRoutes } from '../modules/home/routes'
import { routes as NotificationRoutes } from '../modules/notification/routes'
import { routes as ProfileRoutes } from '../modules/profile/routes'
import { routes as SettingRoutes } from '../modules/Settings/routes'
import { IRoute } from '../types'
import { Spinner } from '../utils/components/animations/loader'
import AuthRoute from './utils'

// import ProfileLayout from '../modules/profile/layouts'
// import MainLayout from '../MainLayout'
// import ChatAppLayout from '../modules/chatApp/layouts'
// import NotificationContainer from '../modules/notification/containers/Notification'
// const NotificationContainer = React.lazy(() =>
// 	import('../modules/notification/containers/Notification')
// )

const allRoutes: IRoute[] = [
	...HomeRoutes,
	...AuthRoutes,
	...ProfileRoutes,
	...ChatRoutes,
	...SettingRoutes,
	...NotificationRoutes
]

// function WaitingComponent() {
// 	return props => <React.Suspense fallback={Spinner}>{props.children}</React.Suspense>
// }

export default (): JSX.Element => {
	// const routes =

	return (
		<React.Fragment>
			<React.Suspense fallback={Spinner}>
				<Switch>
					{/* <Route path={allRoutes[1].path} component={allRoutes[1].component} /> */}

					{allRoutes.map((route: IRoute, i: number) => {
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
				</Switch>
			</React.Suspense>
		</React.Fragment>
	)
}
