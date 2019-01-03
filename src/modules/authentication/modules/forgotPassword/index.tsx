import * as React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Alert } from 'antd'

import ForgotPasswordForm from './views/ForgotPasswordForm'
import AuthenticationController from '../../containers'

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.required()
		.email()
})

interface IState {
	alertWord: string
}

class ForgotPasswordComponent extends React.Component<IState> {
	state = {
		alertWord: ''
	}

	render() {
		const { alertWord } = this.state

		return (
			<React.Fragment>
				{alertWord !== '' ? <Alert message={alertWord} /> : null}
				<AuthenticationController>
					{(result: any) => (
						<Formik
							initialValues={{ email: '' }}
							validationSchema={validationSchema}
							onSubmit={async (values: any, { resetForm, setSubmitting }: any) => {
								const response = await result.forgotPassword({
									email: values.email
								})

								if (response.data.forgotPassword.ok) {
									this.setState({
										alertWord: response.data.forgotPassword.result
									})
								}

								resetForm()
								setSubmitting(false)
							}}
							render={() => <ForgotPasswordForm />}
						/>
					)}
				</AuthenticationController>
			</React.Fragment>
		)
	}
}

export default ForgotPasswordComponent
