import * as React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Alert } from 'antd'

import AuthenticationController from '../../containers'
import { RegisterForm } from './views/RegisterForm'
import { RouteProps } from 'react-router'

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.required()
		.email(),
	password: yup.string().required(),
	username: yup.string().required()
})

// interface IFormValues {
// 	email: string
// 	password: string
// 	username: string
// }

class RegisterContainer extends React.Component<RouteProps> {
	state = {
		responseMessage: ''
	}

	render() {
		const { responseMessage } = this.state
		return (
			<React.Fragment>
				{responseMessage && (
					<Alert message={responseMessage} type="info" />
				)}
				<AuthenticationController>
					{({ register }: any) => (
						<Formik
							initialValues={{
								username: '',
								email: '',
								password: ''
							}}
							validationSchema={validationSchema}
							onSubmit={async value => {
								const response = await register(value)

								if (response.data.register.ok) {
									this.setState({
										responseMessage:
											response.data.register.result
									})
								}
							}}
							render={() => <RegisterForm />}
						/>
					)}
				</AuthenticationController>
			</React.Fragment>
		)
	}
}

export default RegisterContainer
