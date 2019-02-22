import { Formik } from 'formik'
import * as React from 'react'
import { graphql } from 'react-apollo'
import { RouteComponentProps } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import * as yup from 'yup'
import ThirdPartyAuthentication from '../../components/ThirdPartyAuthentication'
import AuthenticationController from '../../containers'
import { AUTHORISE_USER } from '../../graphql/client'
import { LoginForm } from './views/LoginForm'

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.required()
		.email(),
	password: yup.string().required()
})

// interface IFormValues {
// 	email: string
// 	password: string
// }

const LoginContainer: React.FunctionComponent<RouteComponentProps<{}>> = ({
	authoriseUser,
	history,
	history: {
		location: { state }
	}
}: any) => (
	<React.Fragment>
		<AuthenticationController>
			{(result: any) => (
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={validationSchema}
					onSubmit={async ({ email, password }, { setErrors }) => {
						try {
							const {
								data: { login }
							} = await result.login({ email, password })

							const {
								ok,
								user: { username, id },
								refreshToken,
								token
							} = login

							localStorage.setItem('neutron-refresh', refreshToken)
							localStorage.setItem('neutron-token', token)

							if (ok) {
								await authoriseUser({
									variables: {
										loggedIn: ok,
										username,
										id
									}
								})

								if (state && state.next) {
									return history.push(state.next)
								}

								history.push(`/profile/${username}`)
							} else {
								return false
							}
						} catch (error) {
							setErrors({ email: 'Invalid Credentials' })
							return error
						}
					}}
					render={() => {
						return <LoginForm />
					}}
				/>
			)}
		</AuthenticationController>
		<Divider>
			<ThirdPartyAuthentication />
		</Divider>
	</React.Fragment>
)

export default graphql<RouteComponentProps<{}>>(AUTHORISE_USER, {
	name: 'authoriseUser'
})(LoginContainer)
