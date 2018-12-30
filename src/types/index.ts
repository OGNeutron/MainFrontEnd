import { RouteProps } from 'react-router-dom'

export interface IRoute extends RouteProps {
	guest?: boolean
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
