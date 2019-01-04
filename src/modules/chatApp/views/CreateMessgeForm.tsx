import * as React from 'react'
import { Formik } from 'formik'
import { Mutation } from 'react-apollo'
import * as yup from 'yup'

import { FormContainer } from '../../../utils/form/FormContainer'
import { CREATE_MESSAGE_MUTATION } from '../graphql/server'
import { InputField } from '../../../utils/form/inputField'
import {
	CreateMessageMutation,
	CreateMessageMutationVariables
} from '../../../operation-result-types'

// interface FormValues {
// 	message: string
// }

interface IProps {
	channelId: string
}

const validationSchema = yup.object().shape({
	message: yup
		.string()
		.required()
		.min(3)
})

export const CreateMessageForm: React.FunctionComponent<IProps> = ({ channelId }) =>
	channelId !== undefined ? (
		<Mutation<CreateMessageMutation, CreateMessageMutationVariables>
			mutation={CREATE_MESSAGE_MUTATION}
		>
			{mutate => (
				<Formik
					initialValues={{ message: '' }}
					validationSchema={validationSchema}
					validateOnChange={false}
					onSubmit={async ({ message }, { resetForm, setSubmitting }) => {
						await mutate({
							variables: {
								body: message,
								channelId
							}
						})

						resetForm()
						setSubmitting(false)
					}}
				>
					{props => (
						<FormContainer
							{...props}
							formInputs={[
								{
									type: 'text',
									placeholder: 'Create Message',
									name: 'message',
									component: InputField
								}
							]}
						/>
					)}
				</Formik>
			)}
		</Mutation>
	) : null
