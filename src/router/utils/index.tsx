import * as React from 'react'
import { compose, graphql, ChildDataProps, ChildMutateProps } from 'react-apollo'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'

import { CURRENT_USER_QUERY } from '../../utils/graphql/server'
import { AUTHORISE_USER } from '../../modules/authentication/graphql/client'
import { CurrentUserQueryQuery } from '../../apollo/components/apollo-components'

class AuthRoute extends React.Component<
	ChildMutateProps<ChildDataProps<RouteProps, CurrentUserQueryQuery>> & RouteComponentProps<{}>
> {
	componentDidMount() {
		const { currentUser } = this.props.data

		if (currentUser) {
			this.props.mutate({
				variables: {
					username: currentUser.username,
					id: currentUser.id,
					loggedIn: true
				}
			})
		}
	}

	render() {
		const { currentUser, loading } = this.props.data
		const { path, component } = this.props

		if (loading) {
			return null
		}

		console.log(this.props)
		if (currentUser === null) {
			return (
				<Redirect
					to={{
						pathname: '/auth/login',
						state: { next: path }
					}}
				/>
			)
		}

		console.log('PROPS', this.props)

		const Component = component

		// @ts-ignore
		return <Route path={this.props.path} render={(props: any) => <Component {...props} />} />
	}
}

export default compose(
	graphql<RouteProps, CurrentUserQueryQuery>(CURRENT_USER_QUERY),
	graphql<RouteProps>(AUTHORISE_USER)
)(AuthRoute)

// (AuthRoute) = (props: RouteComponentProps<{}>): JSX.Element => (
// 	<Query query={CURRENT_USER_QUERY}>
// 		{({ data, loading }) => {
// 			if (loading === false) {
// 				if (data !== undefined) {
// 					if (data.currentUser !== null) {
// 						return (
// 							<ApolloConsumer>
// 								{async client => {
// 									const response = await client.mutate({
// 										mutation: AUTHORISE_USER,
// 										variables: {
// 											username: data.currentUser.username,
// 											id: data.currentUser.id,
// 											loggedIn: true
// 										}
// 									})

// 									if (response) {
// 										console.log(response)
// 									}
// 									return <Route {...props} />
// 								}}
// 							</ApolloConsumer>
// 						)
// 					}
// 				}

// 				return (
// 					<Redirect
// 						to={{
// 							pathname: '/auth/login',
// 							state: { next: props.location.pathname }
// 						}}
// 					/>
// 				)
// 			} else {
// 				return null
// 			}
// 		}}
// 	</Query>
// ))
