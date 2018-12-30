import { AuthenticationLayout } from '../layouts'
import { IRoute } from '../../../types'

export const routes: IRoute[] = [
	{
		path: '/auth',
		component: AuthenticationLayout,
		guest: true
	}
]
