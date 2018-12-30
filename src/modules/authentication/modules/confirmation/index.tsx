import * as React from 'react'
import { Link, RouteProps } from 'react-router-dom'
import { graphql, ChildMutateProps } from 'react-apollo'
import { Alert } from 'antd'

import { AUTH_CONFIRMATION } from '../../graphql'
import {
	AuthConfirmation,
	AuthConfirmationVariables
} from '../../../../operation-result-types'

interface IProps {
	location: any
	mutate: (values: AuthConfirmationVariables) => Promise<AuthConfirmation>
}

class Confirmation extends React.Component<
	ChildMutateProps<
		IProps | RouteProps,
		AuthConfirmation,
		AuthConfirmationVariables
	>
> {
	state = {
		result: '',
		ok: false
	}

	async componentDidMount() {
		const token = this.props.location.search
			.split('')
			.slice(3, -1)
			.join('')

		const response = await this.props.mutate({
			variables: {
				token
			}
		})

		if (response !== undefined && response.data !== undefined) {
			const { result } = response.data.authConfirmation

			if (response.data.authConfirmation.ok) {
				this.setState({
					result,
					ok: true
				})
			} else {
				this.setState({
					result,
					ok: false
				})
			}
		}
	}

	render() {
		const { result, ok } = this.state

		return (
			<React.Fragment>
				{result ? (
					<React.Fragment>
						{ok ? (
							<React.Fragment>
								<Alert
									message={`${result}, you are now are able to log in`}
								/>
								<Link to="/auth/login">Login</Link>{' '}
							</React.Fragment>
						) : (
							<Alert
								message={`${result}, please check your email, or send a new token`}
							/>
						)}
					</React.Fragment>
				) : (
					<div>Processing...</div>
				)}
			</React.Fragment>
		)
	}
}

export default graphql(AUTH_CONFIRMATION)(Confirmation as any)
