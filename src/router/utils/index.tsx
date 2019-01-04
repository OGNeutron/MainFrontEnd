import * as React from 'react'
import { Query, ApolloConsumer } from 'react-apollo'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'

import { CURRENT_USER_QUERY } from '../../utils/graphql/server'
import { AUTHORISE_USER } from '../../modules/authentication/graphql/client'

// @ts-ignore
export const AuthRoute: React.FunctionComponent<RouteProps> = (props: RouteComponentProps<{}>): JSX.Element => (
	<Query query={CURRENT_USER_QUERY}>
		{({ data, loading }) => {
			if (loading === false) {
				if (data !== undefined) {
					if (data.currentUser !== null) {
						return (
							<ApolloConsumer>
								{client => {
									client
										.mutate({
											mutation: AUTHORISE_USER,
											variables: {
												username: data.currentUser.username,
												id: data.currentUser.id,
												loggedIn: true
											}
										})
										.then(() => {
											return <Route {...props} />
										})
										.catch(console.error)
									return <Route {...props} />
								}}
							</ApolloConsumer>
						)
					}
				}

				return (
					<Redirect
						to={{
							pathname: '/auth/login',
							state: { next: props.location.pathname }
						}}
					/>
				)
			} else {
				return null
			}
		}}
	</Query>
)
