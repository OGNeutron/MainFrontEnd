import * as React from 'react'
import { Route } from 'react-router-dom'

import RegisterContainer from '../modules/register'
import LoginContainer from '../modules/login'
import Confirmation from '../modules/confirmation'
import ForgotPasswordComponent from '../modules/forgotPassword'
import ResetPasswordComponent from '../modules/resetPassword'

export const AuthenticationLayout: React.FunctionComponent = (props: any): JSX.Element => (
	<React.Fragment>
		<Route path={`${props.match.path}/login`} component={LoginContainer} />
		<Route path={`${props.match.path}/register`} component={RegisterContainer} />
		<Route path={`${props.match.path}/confirmation`} component={Confirmation} />
		<Route path={`${props.match.path}/forgot_password`} component={ForgotPasswordComponent} />
		<Route path={`${props.match.path}/change_password`} component={RegisterContainer} />
		<Route path={`${props.match.path}/reset_password`} component={ResetPasswordComponent} />
	</React.Fragment>
)
