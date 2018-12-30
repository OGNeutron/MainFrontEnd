import { IRoute } from '../../../types'
import ProfileLayout from '../layouts'

export const routes: IRoute[] = [
	{
		path: '/profile',
		component: ProfileLayout,
		guest: false
	}
]
