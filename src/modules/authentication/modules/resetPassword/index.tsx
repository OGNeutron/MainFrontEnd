import * as React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import * as jwtDecode from 'jwt-decode'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import ResetPasswordForm from './views/ResetPasswordForm'
import AuthenticationController from '../../containers'

const validationSchema = yup.object().shape({
	password: yup.string().required()
})

interface IState {
	resetPassword: boolean
}

interface IFormValues {
	password: string
	confirmPassword: string
}

class ResetPasswordComponent extends React.Component<RouteComponentProps<any & IState>> {
	state = {
		resetPassword: false,
		id: ''
	}

	async componentDidMount() {
		const token = this.props.location.search
			.split('')
			.slice(3, -1)
			.join('')

		// @ts-ignore
		const decoded: { user: { id: string } } = jwtDecode(token)

		if (!token) {
			this.props.history.push('/auth/forgot_password')
		} else {
			this.setState({
				resetPassword: true,
				id: decoded && decoded.user && decoded.user.id
			})
		}
	}

	render() {
		const { resetPassword } = this.state

		return (
			<React.Fragment>
				<h2>Reset Password</h2>
				{resetPassword ? (
					<AuthenticationController>
						{(result: any) => (
							<Formik
								initialValues={{
									password: '',
									confirmPassword: ''
								}}
								validationSchema={validationSchema}
								onSubmit={async (values: IFormValues) => {
									if (values.password === values.confirmPassword) {
										await result.resetPassword({
											password: values.password,
											id: this.state.id
										})
									}
								}}
								render={() => <ResetPasswordForm />}
							/>
						)}
					</AuthenticationController>
				) : null}
			</React.Fragment>
		)
	}
}

export default withRouter(ResetPasswordComponent)
