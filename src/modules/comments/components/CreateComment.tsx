import * as React from 'react'
import { FormikProps, Formik } from 'formik'
import { compose, graphql, ChildMutateProps } from 'react-apollo'

import { FormContainer } from '../../../utils/form/FormContainer'
import { COMMENT_MUTATION, COMMENTS_QUERY } from '../graphql/server'
import { CommentMutationVariables } from '../../../operation-result-types'
import { validationSchema } from '../utils/yupSchemas'
// import { FormTextArea } from '../../../utils/form/FormTextArea'
import { InputField } from '../../../utils/form/inputField'
// import TextEditor from '../../shared/components/TextEditor'

interface IProps extends FormikProps<any> {
	pageId: string
	parentId: string
	id: string
}

function CreateComment(props: ChildMutateProps<IProps>): JSX.Element {
	return (
		<React.Fragment>
			<Formik
				initialValues={{ body: '' }}
				validationSchema={validationSchema}
				onSubmit={async (values, { resetForm, setSubmitting }) => {
					await props.mutate({
						variables: {
							pageId: props.parentId,
							parentId: props.parentId,
							body: values.body
						},
						update(cache, { data: { createComment } }: any) {
							const data = cache.readQuery({
								query: COMMENTS_QUERY,
								variables: {
									parentId: props.parentId,
									limit: 10,
									offset: 0
								}
							}) as any

							if (data != null) {
								let newComment = {
									__typename: 'CommentNode',
									node: {
										...createComment
									}
								}
								data.queryComment.edges.unshift(newComment)
							}

							return cache.writeQuery({
								query: COMMENTS_QUERY,
								variables: {
									parentId: props.parentId
								},
								data
							})
						}
					})

					resetForm()
					setSubmitting(false)
				}}
				render={formikProps => (
					<React.Fragment>
						<FormContainer
							{...props}
							{...formikProps}
							reply={true}
							formInputs={[
								{
									type: 'text',
									name: 'body',
									placeholder: 'place a comment',
									component: InputField
								}
							]}
						/>
						{/* <TextEditor setFieldValue={formikProps.setFieldValue} /> */}
					</React.Fragment>
				)}
			/>
		</React.Fragment>
	)
}

export default compose(graphql<CommentMutationVariables>(COMMENT_MUTATION))(CreateComment)
