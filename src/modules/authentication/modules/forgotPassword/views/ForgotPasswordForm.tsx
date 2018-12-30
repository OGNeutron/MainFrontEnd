import * as React from 'react'
import { Icon } from 'antd'

import { InputField } from '../../../../../utils/form/inputField'
import { FormContainer } from '../../../../../utils/form/FormContainer'

const ForgotPasswordForm: React.SFC = (): JSX.Element => (
	<FormContainer
		formInputs={[
			{
				type: 'text',
				placeholder: 'Email',
				name: 'email',
				prefix: (
					<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
				) as any,
				component: InputField
			}
		]}
	/>
)

export default ForgotPasswordForm
