import * as React from 'react';
import { ChildDataProps, ChildMutateProps, compose, graphql } from 'react-apollo';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { CurrentUserQueryQuery } from '../../apollo/components/apollo-components';
import { AUTHORISE_USER } from '../../modules/authentication/graphql/client';
import { CURRENT_USER_QUERY } from '../../utils/graphql/server';

class AuthRoute extends React.Component<
	ChildMutateProps<ChildDataProps<RouteProps, CurrentUserQueryQuery>> & RouteComponentProps<{}>
> {
	render() {
		const { currentUser, loading } = this.props.data
		const { path, component } = this.props

		if (loading) {
			return null
		}

		console.log("CURRENT_USER", currentUser)

		if (currentUser === null || currentUser === undefined) {
			return (
				<Redirect
					to={{
						pathname: '/auth/login',
						state: { next: path }
					}}
				/>
			)
		}

		this.props.mutate({
			variables: {
				username: currentUser.username,
				id: currentUser.id,
				loggedIn: true
			}
		})

		return <Route path={this.props.path} component={component} />
	}
}

// component={Component} render={(props: any) => <Component {...props} />}

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
