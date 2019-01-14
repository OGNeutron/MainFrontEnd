import * as React from 'react'
import { IRoute } from '../../../types'
// import NotificationLayout from '../components'

const NotificationLayout = React.lazy(() => import('../containers/Notification'))

export const routes: IRoute[] = [
	{
		path: '/notifications',
		component: NotificationLayout,
		guest: false
	}
]
