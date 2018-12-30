import { IRoute } from '../../../types'
import { ChatAppLayout } from '../layouts'

export const routes: IRoute[] = [
	{
		path: '/chat-app',
		component: ChatAppLayout,
		guest: false
	}
]
