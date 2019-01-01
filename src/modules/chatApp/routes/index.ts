import * as React from 'react'
import { IRoute } from '../../../types'
// import { ChatAppLayout } from '../layouts'

const ChatLayout = React.lazy(() => import('../layouts'))

export const routes: IRoute[] = [
	{
		path: '/chat-app',
		component: ChatLayout,
		guest: false
	}
]
