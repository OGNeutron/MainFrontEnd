import { isEqual } from 'lodash'
import * as React from 'react'
import { ChildProps, compose, graphql } from 'react-apollo'
import Helmet from 'react-helmet'
import { toast, ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { CURRENT_THEME_QUERY, CURRENT_USER_QUERY_CLIENT } from './apollo/graphql/client'
import { LOGOUT_MUTATION } from './modules/authentication/graphql'
import { AUTHORISE_USER } from './modules/authentication/graphql/client'
import SubscriptionContainer from './modules/notification/containers/SubcriptionContainer'
import Header from './partials/Header/Header'
import Routes from './router'
import { Container, GlobalStyle, MainLayoutStyle } from './styles'
import { theme } from './styles/theme'
import { IAuthoriseVariables } from './types'
import { CHANGE_THEME } from './utils/graphql/client/index'
import { themeHelper } from './utils/helpers'

// import { Footer } from './partials/footer/Footer'

interface IVariables {
	variables: IAuthoriseVariables
}

interface IState {
	online: boolean
}

interface IProps {
	currentUser: any
	currentTheme: { clientTheme: { theme: string } }
	currentUserServer: any
	logoutMutation: any

	authoriseUser: ({  }: IVariables) => any
	changeTheme: ({  }: any) => any
}

const CountContext = React.createContext({ count: 0 })

class MainLayout extends React.Component<ChildProps<IProps>, IState> {
	static contextType = CountContext

	state = {
		online: true
	}

	componentDidMount() {
		const theme = this.props.currentTheme.clientTheme.theme
		themeHelper(theme)

		window.addEventListener('online', this.onLine)
		window.addEventListener('offline', this.offLine)
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.onLine)
		window.removeEventListener('offline', this.offLine)
	}

	onLine = () => {
		toast('Website Currently Online', { autoClose: false })
	}

	offLine = () => {
		toast('Website Currently Offline', { autoClose: false })
	}

	shouldComponentUpdate(nextProps) {
		if (!isEqual(this.props, nextProps) && this.context.count < 5) {
			this.context.count++
			return true
		} else {
			this.context.count = 0
			return false
		}
	}

	_logout = async () => {
		this.props.authoriseUser({
			variables: {
				__typename: 'authorisedUser',
				id: '',
				username: '',
				loggedIn: false
			}
		})

		await this.props.logoutMutation()
		return
	}

	_login = () => {
		if (this.props.currentUserServer.currentUser) {
			const {
				currentUser: { username, id }
			} = this.props.currentUserServer
			return this.props.authoriseUser({
				variables: {
					__typename: 'authorisedUser',
					username,
					id,
					loggedIn: true
				}
			})
		}
		return
	}

	render() {
		let header: JSX.Element
		let username = this.props.currentUser.authorisedUser.username

		console.log('PROPS CURRENT USER', this.props.currentUser)

		const { currentTheme } = this.props

		header = (
			<Header
				authorised={this.props.currentUser.authorisedUser.loggedIn}
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
						link: '/notifications',
						icon: 'tasks',
						tooltip: 'notifications',
						text: '',
						auth: true,
						badge: true,
						count: 1
					},
					{
						link: '/auth/register',
						icon: 'add user',
						tooltip: 'register',
						text: '',
						auth: false
					},
					{
						link: `/settings/${username || ''}`,
						icon: 'setting',
						tooltip: 'settings',
						text: 'Settings',
						auth: true
					},
					{
						link: `/profile/${username || ''}`,
						icon: 'user',
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
			<ThemeProvider theme={theme[(currentTheme.clientTheme.theme as any) || 'light']}>
				<React.Fragment>
					{this.props.currentUser.authorisedUser.id !== '' ? (
						<React.Fragment>
							<SubscriptionContainer
								username={this.props.currentUser.authorisedUser.username}
								id={this.props.currentUser.authorisedUser.id}
							/>

							<ToastContainer
								autoClose={5000}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								draggable
							/>
						</React.Fragment>
					) : null}

					<GlobalStyle theme={theme[currentTheme.clientTheme.theme]} />

					<MainLayoutStyle>
						<Helmet>
							<meta charSet="utf-8" />
							<title>MainSite</title>
							<meta name="universal app" content="stuff happens" />
						</Helmet>
						{header}
						<Container width="80%">
							<Routes />
						</Container>
					</MainLayoutStyle>
					{/* <Footer /> */}
				</React.Fragment>
			</ThemeProvider>
		)
	}
}

export default compose(
	graphql(AUTHORISE_USER, { name: 'authoriseUser' }),
	graphql(CURRENT_USER_QUERY_CLIENT, { name: 'currentUser' }),
	graphql(CHANGE_THEME, { name: 'changeTheme' }),
	graphql(CURRENT_THEME_QUERY, { name: 'currentTheme' }),
	// graphql(CURRENT_USER_QUERY, { name: 'currentUserServer' }),
	graphql(LOGOUT_MUTATION, { name: 'logoutMutation' })
)(MainLayout)
