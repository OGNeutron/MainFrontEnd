// import * as React from 'react'
import { IRoute } from '../../../types'
import ProfileLayout from '../layouts'

// const ProfileLayout = React.lazy(() => import('../layouts'))

export const routes: IRoute[] = [
	{
		path: '/profile',
		component: ProfileLayout,
		guest: false
	}
]
