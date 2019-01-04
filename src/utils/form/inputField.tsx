import * as React from 'react'
import { FieldProps } from 'formik'
import { Form, Message } from 'semantic-ui-react'

export const InputField: React.FunctionComponent<FieldProps<any>> = ({
	field,
	form: { touched, errors, dirty },
	...props
}): JSX.Element => {
	const errorMessage =
		touched[field.name] && errors[field.name] ? true : false

	return (
		<React.Fragment>
			<Form.Field>
				<Form.Input
					style={{ marginTop: '1rem' }}
					fluid
					{...props}
					{...field}
				/>
				{errorMessage && dirty === true ? (
					<Message
						error={errorMessage}
						header="Action Forbidden"
						content={errors[field.name]}
					/>
				) : null}
			</Form.Field>
			{/* <Form.Input>
				validateStatus={errorMessage}
				help={errorMessage ? errors[field.name] : ''}
				>
				<Input {...field} {...props} />
			</Form.Input> */}
		</React.Fragment>
	)
}
