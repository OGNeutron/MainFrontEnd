import { Formik, FormikProps } from 'formik'
import * as React from 'react'
import { ChildMutateProps, compose, graphql } from 'react-apollo'
import { CommentMutationVariables } from '../../../operation-result-types'
import { FormContainer } from '../../../utils/form/FormContainer'
// import { FormTextArea } from '../../../utils/form/FormTextArea'
import { InputField } from '../../../utils/form/inputField'
import { COMMENTS_QUERY, COMMENT_MUTATION } from '../graphql/server'
import { validationSchema } from '../utils/yupSchemas'

// import TextEditor from '../../shared/components/TextEditor'

interface IProps extends FormikProps<any> {
	pageId: string
	parentId: string
	id: string
	count: number
	offset: any
}

function CreateComment(props: ChildMutateProps<IProps>): JSX.Element {
	return (
		<React.Fragment>
			<Formik
				initialValues={{ body: '' }}
				validationSchema={validationSchema}
				onSubmit={async (values, { resetForm, setSubmitting }) => {
					const variables = {
						pageId: props.parentId,
						parentId: props.parentId,
						body: values.body
					}

					if (props.count == 0) {
						await props.mutate({
							variables,
							refetchQueries: [
								{
									query: COMMENTS_QUERY,
									variables: {
										parentId: props.pageId,
										limit: 10,
										offset: props.offset
									}
								}
							]
						})
					} else {
						await props.mutate({
							variables,
							update(cache, { data: { createComment } }: any) {
								const data = cache.readQuery({
									query: COMMENTS_QUERY,
									variables: {
										parentId: props.parentId,
										limit: 10,
										offset: props.offset
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
										parentId: props.parentId,
										limit: 10,
										offset: props.offset
									},
									data
								})
							}
						})
					}

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
