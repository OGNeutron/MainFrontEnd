import gql from 'graphql-tag'

export const REGISTER_MUTATION = gql`
	mutation Register($email: String!, $password: String!, $username: String!) {
		register(email: $email, password: $password, username: $username) {
			ok
			result
		}
	}
`

export const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			ok
			token
			refreshToken
			user {
				id
				username
			}
		}
	}
`

export const FORGOT_PASSWORD_MUTATION = gql`
	mutation ForgotPassword($email: String!) {
		forgotPassword(email: $email) {
			ok
			result
		}
	}
`

export const CHECK_TOKEN = gql`
	mutation CheckToken($token: String!) {
		checkToken(token: $token) {
			ok
			result
		}
	}
`

export const RESET_PASSWORD = gql`
	mutation ResetPassword($id: ID!, $password: String!) {
		resetPassword(id: $id, password: $password) {
			ok
			result
		}
	}
`

export const AUTH_CONFIRMATION = gql`
	mutation AuthConfirmation($token: String!) {
		authConfirmation(token: $token) {
			ok
			result
		}
	}
`

export const LOGOUT_MUTATION = gql`
	mutation LogoutMutation {
		logout
	}
`
