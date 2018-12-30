import { branch, renderComponent } from 'recompose'

export const checkLoading = (loading: any, component: any) =>
	branch(loading, renderComponent(component))
