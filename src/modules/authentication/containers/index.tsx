import * as React from 'react'
import { graphql, compose, ChildProps } from 'react-apollo'

import {
	REGISTER_MUTATION,
	LOGIN_MUTATION,
	FORGOT_PASSWORD_MUTATION,
	CHECK_TOKEN,
	RESET_PASSWORD
} from '../graphql'
import {
	Register_register,
	RegisterVariables,
	LoginVariables,
	ResetPasswordVariables,
	CheckTokenVariables,
	ForgotPasswordVariables,
	ForgotPassword,
	CheckToken,
	ResetPassword,
	Login_login
} from '../../../operation-result-types'

interface IRegisterMutationVariables {
	variables: RegisterVariables
}

interface ILoginMutationVariables {
	variables: LoginVariables
}

interface IForgotPasswordVariables {
	variables: ForgotPasswordVariables
}

interface ICheckResetTokenVariables {
	variables: CheckTokenVariables
}

interface IResetPasswordVariables {
	variables: ResetPasswordVariables
}

interface IProps {
	children: (
		data: {
			register: (values: RegisterVariables) => Promise<any>
			login: (values: LoginVariables) => Promise<any>
			resetPassword: (values: ResetPasswordVariables) => Promise<any>
			checkResetToken: (values: CheckTokenVariables) => Promise<any>
			forgotPassword: (values: ForgotPasswordVariables) => Promise<any>
		}
	) => JSX.Element | null
	registerMutation: ({  }: IRegisterMutationVariables) => Register_register
	loginMutation: ({  }: ILoginMutationVariables) => Login_login
	forgotPasswordMutation: ({  }: IForgotPasswordVariables) => ForgotPassword
	checkResetTokenMutation: ({  }: ICheckResetTokenVariables) => CheckToken
	resetPasswordMutation: ({  }: IResetPasswordVariables) => ResetPassword
}

class AuthenticationController extends React.Component<ChildProps<IProps>> {
	_resetPassword = async ({ id, password }: ResetPasswordVariables) => {
		return this.props.resetPasswordMutation({
			variables: { id, password }
		})
	}

	_checkResetToken = async ({ token }: CheckTokenVariables) => {
		return this.props.checkResetTokenMutation({
			variables: { token }
		})
	}

	_forgotPassword = async ({ email }: ForgotPasswordVariables) => {
		return this.props.forgotPasswordMutation({ variables: { email } })
	}

	_register = async ({
		email,
		password,
		username
	}: RegisterVariables): Promise<any> => {
		return this.props.registerMutation({
			variables: { username, email, password }
		})
	}

	_login = async ({ email, password }: LoginVariables): Promise<any> => {
		return this.props.loginMutation({
			variables: { email, password }
		})
	}

	render() {
		return this.props.children({
			register: this._register,
			login: this._login,
			checkResetToken: this._checkResetToken,
			resetPassword: this._resetPassword,
			forgotPassword: this._forgotPassword
		})
	}
}

export default compose(
	graphql(REGISTER_MUTATION, { name: 'registerMutation' }),
	graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
	graphql(FORGOT_PASSWORD_MUTATION, { name: 'forgotPasswordMutation' }),
	graphql(CHECK_TOKEN, { name: 'checkResetTokenMutation' }),
	graphql(RESET_PASSWORD, { name: 'resetPasswordMutation' })
)(AuthenticationController)
