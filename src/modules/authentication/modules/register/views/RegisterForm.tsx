import * as React from 'react'
import { Icon } from 'antd'

import { FormContainer } from '../../../../../utils/form/FormContainer'
import { InputField } from '../../../../../utils/form/inputField'

export const RegisterForm: React.SFC = (): JSX.Element => (
	<FormContainer
		formInputs={[
			{
				type: 'text',
				placeholder: 'Username',
				name: 'username',
				prefix: (
					<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
				) as any,
				component: InputField
			},
			{
				type: 'text',
				placeholder: 'Email',
				name: 'email',
				prefix: (
					<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />
				) as any,
				component: InputField
			},
			{
				name: 'password',
				type: 'password',
				prefix: (
					<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
				) as any,
				placeholder: 'Password',
				component: InputField
			}
		]}
	/>
)
