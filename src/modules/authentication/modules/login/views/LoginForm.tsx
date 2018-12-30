import * as React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

import { InputField } from '../../../../../utils/form/inputField'
import { FormContainer } from '../../../../../utils/form/FormContainer'
import { Link } from 'react-router-dom'

const LoginFormLayout = styled.div`
	width: 60%;
	margin: auto;

	@media (max-width: 700px) {
		width: 100%;
	}
`

export const LoginForm: React.SFC = (): JSX.Element => (
	<LoginFormLayout>
		<FormContainer
			formInputs={[
				{
					type: 'text',
					name: 'email',
					placeholder: 'Email',
					prefix: (
						<Icon
							type="user"
							style={{ color: 'rgba(0,0,0,.25)' }}
						/>
					) as any,
					component: InputField
				},
				{
					type: 'password',
					name: 'password',
					placeholder: 'Password',
					prefix: (
						<Icon
							type="lock"
							style={{ color: 'rgba(0,0,0,.25)' }}
						/>
					) as any,
					component: InputField
				}
			]}
		/>
		<Link to="/auth/forgot_password">Forgot Password</Link>
	</LoginFormLayout>
)
