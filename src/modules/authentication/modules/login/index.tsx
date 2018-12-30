import * as React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { graphql } from 'react-apollo'
import { RouteComponentProps } from 'react-router-dom'

import AuthenticationController from '../../containers'
import { LoginForm } from './views/LoginForm'
import { AUTHORISE_USER } from '../../graphql/client'
import { Divider } from 'semantic-ui-react'
import ThirdPartyAuthentication from '../../components/ThirdPartyAuthentication'

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

const LoginContainer: React.SFC<RouteComponentProps<{}>> = ({
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
								user: { username, id }
							} = login

							if (ok) {
								await authoriseUser({
									variables: {
										__typename: 'currentUserClient',
										loggedIn: ok,
										username,
										id
									}
								})

								if (state && state.next) {
									history.push(state.next)
									return
								}

								history.push(`/profile/${username}`)
							} else {
								return false
							}
						} catch (error) {
							console.log('ERROR', error)
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
