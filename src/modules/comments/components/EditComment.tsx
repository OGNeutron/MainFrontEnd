import * as React from 'react'
import { graphql, compose, ChildMutateProps } from 'react-apollo'
import { withFormik } from 'formik'
import * as yup from 'yup'

import { Comment as IComment } from '../types'
import { EDIT_COMMENT_MUTATION } from '../graphql/server'
import { FormContainer } from '../../../utils/form/FormContainer'
import { FormTextArea } from '../../../utils/form/FormTextArea'
// import { InputField } from '../../../utils/form/inputField'

interface IProps {
	comment: IComment
	toggleEdit: () => void
}

function EditComment(props: IProps): JSX.Element {
	const { comment } = props

	return (
		<FormContainer
			{...props}
			submitButton={true}
			formInputs={[
				{
					type: 'text',
					value: comment.body,
					name: 'body',
					component: FormTextArea
				}
			]}
		/>
	)
}

const validationSchema = yup.object().shape({
	body: yup.string().required()
})

export default compose(
	graphql<IProps>(EDIT_COMMENT_MUTATION),
	withFormik<ChildMutateProps<IProps>, any, any>({
		mapPropsToValues: () => ({ body: '' }),
		validationSchema,
		async handleSubmit(
			values,
			{
				props: {
					mutate,
					comment: { id },
					toggleEdit
				},
				resetForm,
				setSubmitting
			}
		) {
			const response = await mutate({
				variables: {
					body: values.body,
					id
				}
			})

			if (!response) {
				resetForm()
				setSubmitting(false)
			}
			toggleEdit()
		}
	})
)(EditComment)
