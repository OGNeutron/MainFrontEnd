import * as React from 'react'
import { Icon } from 'antd'

import { InputField } from '../../../../../utils/form/inputField'
import { FormContainer } from '../../../../../utils/form/FormContainer'

const ResetPasswordForm: React.FunctionComponent = (): JSX.Element => (
	<FormContainer
		formInputs={[
			{
				type: 'password',
				name: 'password',
				prefix: (
					<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
				) as any,
				component: InputField
			},
			{
				type: 'password',
				name: 'confirmPassword',
				placeholder: 'Duplicate Password',
				component: InputField
			}
		]}
	/>
)

export default ResetPasswordForm
