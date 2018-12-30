import { IRoute } from '../../../types'
import { SettingLayout } from '../layout'

export const routes: IRoute[] = [
	{
		path: '/settings',
		component: SettingLayout,
		guest: false
	}
]
