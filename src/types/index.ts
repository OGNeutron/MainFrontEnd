import { RouteProps } from 'react-router-dom'

export interface IRoute extends RouteProps {
	path: string
	guest?: boolean
	component: any
}

export interface IUser {
	username: string
	id: string
	loggedIn: boolean
}

export interface IAuthoriseVariables {
	__typename: string
	username: string
	id: string
	loggedIn: boolean
}
