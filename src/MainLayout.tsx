import * as React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { graphql, ChildProps, compose } from 'react-apollo'

import Routes from './router'
import Header from './partials/Header/Header'
import {
	CURRENT_USER_QUERY_CLIENT,
	CURRENT_THEME_QUERY
} from './apollo/graphql/client'
import { AUTHORISE_USER } from './modules/authentication/graphql/client'
import { IAuthoriseVariables } from './types'
import { theme } from './styles/theme'
import { MainLayoutStyle, Container, GlobalStyle } from './styles'
import { CHANGE_THEME } from './utils/graphql/client/index'
import NotificationContainer from './modules/notification/containers/Notification'
import { CURRENT_USER_QUERY } from './utils/graphql/server'
import { LOGOUT_MUTATION } from './modules/authentication/graphql'

interface IVariables {
	variables: IAuthoriseVariables
}

interface IProps {
	currentUser: any
	currentTheme: { clientTheme: { theme: string } }
	currentUserServer: any
	logoutMutation: any

	authoriseUser: ({  }: IVariables) => any
	changeTheme: ({  }: any) => any
}

class MainLayout extends React.Component<ChildProps<IProps>> {
	state = {
		authorised: false
	}

	_logout = async () => {
		this.props.authoriseUser({
			variables: {
				__typename: 'currentUserClient',
				id: '',
				username: '',
				loggedIn: false
			}
		})

		// await this.props.logoutMutation()
	}

	_login = () => {
		console.log(this.props.currentUserServer)
		if (this.props.currentUserServer.currentUser) {
			const {
				currentUser: { username, id }
			} = this.props.currentUserServer
			this.props.authoriseUser({
				variables: {
					__typename: 'currentUserClient',
					username,
					id,
					loggedIn: true
				}
			})
		}
	}

	render() {
		let header

		const { currentTheme } = this.props

		header = (
			<Header
				authorised={false}
				sidePanel={true}
				navBrand={{
					title: 'MainSite',
					icon: 'double-right'
				}}
				navItems={[
					// {
					// 	link: `/profile`,
					// 	icon: 'user',
					// 	tooltip: `${username}`,
					// 	text: '',
					// 	auth: true,
					// 	children: []
					// },
					//
					{
						link: '/auth/login',
						icon: 'sign in',
						tooltip: 'login',
						text: '',
						auth: false
					},
					{
						link: '/auth/register',
						icon: 'add user',
						tooltip: 'register',
						text: '',
						auth: false
					}
				]}
			/>
		)
		if (
			this.props.currentUserServer.loading === false &&
			this.props.currentUserServer.currentUser
		) {
			const {
				currentUserServer: {
					currentUser: { username, id }
				}
			} = this.props
			header = (
				<Header
					authorised={
						this.props.currentUser.currentUserClient.loggedIn
					}
					sidePanel={true}
					navBrand={{
						title: 'MainSite',
						icon: 'double-right'
					}}
					navItems={[
						// {
						// 	link: `/profile`,
						// 	icon: 'user',
						// 	tooltip: `${username}`,
						// 	text: '',
						// 	auth: true,
						// 	children: []
						// },
						{
							link: '/auth/login',
							icon: 'sign in',
							tooltip: 'login',
							text: '',
							auth: false
						},
						{
							link: '/auth/register',
							icon: 'add user',
							tooltip: 'register',
							text: '',
							auth: false
						},
						{
							link: '/settings',
							icon: 'setting',
							tooltip: 'settings',
							text: 'Settings',
							auth: true
						},
						{
							link: `/profile/${username || ''}`,
							icon: 'bolt',
							tooltip: 'profile',
							text: 'Profile',
							auth: true
						},

						{
							link: '/auth/login',
							icon: 'sign out',
							tooltip: 'logout',
							text: '',
							auth: true,
							onClickEvent: this._logout
						}
					]}
				/>
			)
			return (
				<ThemeProvider
					theme={
						theme[
							(currentTheme.clientTheme.theme as any) || 'light'
						]
					}
				>
					<React.Fragment>
						<GlobalStyle
							theme={theme[currentTheme.clientTheme.theme]}
						/>
						<MainLayoutStyle>
							<Helmet>
								<meta charSet="utf-8" />
								<title>MainSite</title>
								<meta
									name="universal app"
									content="stuff happens"
								/>
							</Helmet>
							{header}
							<Container width="80%">
								{username !== null ? (
									<NotificationContainer
										username={username}
										id={id}
									/>
								) : null}
								{username !== null ? (
									<NotificationContainer
										username={username}
										id={id}
									/>
								) : null}
								<Routes />
							</Container>
						</MainLayoutStyle>
					</React.Fragment>
				</ThemeProvider>
			)
		} else {
			return this.props.currentUserServer.loading === false ? (
				<ThemeProvider
					theme={theme[currentTheme.clientTheme.theme as any] || {}}
				>
					<MainLayoutStyle>
						<Helmet>
							<meta charSet="utf-8" />
							<title>MainSite</title>
							<meta
								name="universal app"
								content="stuff happens"
							/>
						</Helmet>
						{header}
						<Container width="80%">
							<Routes />
						</Container>
					</MainLayoutStyle>
				</ThemeProvider>
			) : null
		}
	}
}

export default compose(
	graphql(AUTHORISE_USER, { name: 'authoriseUser' }),
	graphql(CURRENT_USER_QUERY_CLIENT, { name: 'currentUser' }),
	graphql(CHANGE_THEME, { name: 'changeTheme' }),
	graphql(CURRENT_THEME_QUERY, { name: 'currentTheme' }),
	graphql(CURRENT_USER_QUERY, { name: 'currentUserServer' }),
	graphql(LOGOUT_MUTATION, { name: 'logoutMutation' })
)(MainLayout)
