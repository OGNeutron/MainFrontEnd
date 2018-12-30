import * as React from 'react'
import { FieldProps } from 'formik'
import { Message } from 'semantic-ui-react'
import { Input } from 'antd'

const { TextArea } = Input

interface IProps {
	value: string
}

export class FormTextArea extends React.Component<FieldProps<any> & IProps> {
	state = {
		value: this.props.value
	}

	onChange = (e: any) => {
		const {
			form: { setFieldValue }
		} = this.props

		setFieldValue(e.target.name, e.target.value)
	}

	render() {
		const {
			form: { touched, errors, dirty },
			field: { name },
			value,
			...props
		} = this.props

		const errorMessage = touched[name] && errors[name] ? true : false

		return (
			<React.Fragment>
				<TextArea
					style={{ marginTop: '1rem', width: '100%' }}
					autosize={false}
					defaultValue={this.state.value}
					onChange={this.onChange}
					{...props}
					name={name}
				/>
				{errorMessage && dirty === true ? (
					<Message
						error={errorMessage}
						header="Action Forbidden"
						content={errors[name]}
					/>
				) : null}
			</React.Fragment>
		)
	}
}
