import { Formik, FormikProps } from 'formik'
import * as React from 'react'
import { ChildMutateProps, compose, graphql } from 'react-apollo'
import { Comment } from 'semantic-ui-react'
import { FormContainer } from '../../../utils/form/FormContainer'
import { InputField } from '../../../utils/form/inputField'
import { COMMENTS_QUERY, CREATE_REPLY_MUTATION } from '../graphql/server'
import { CommentListLayout } from '../styles'
import { Comment as IComment } from '../types'
import { validationSchema } from '../utils/yupSchemas'

interface IProps {
	comment: IComment
	pageId: string
	parentId: string
	reply: boolean
	offset: any
}

type Union = FormikProps<any> & ChildMutateProps<IProps>

const CreateReply: React.FunctionComponent<Union> = props => {
	const [open, changeOpen] = React.useState(false)

	return (
		<React.Fragment>
			<Comment.Action onClick={() => changeOpen(!open)}>
				{' '}
				<CommentListLayout>Reply</CommentListLayout>{' '}
			</Comment.Action>
			{open && (
				<Formik
					initialValues={{ body: '' }}
					validationSchema={validationSchema}
					onSubmit={async (values, { setSubmitting, resetForm }) => {
						const {
							reply,
							mutate,
							comment: { parentId, author, id },
							pageId,
							parentId: otherParentId
						} = props

						if (reply) {
							await mutate({
								variables: {
									body: values.body,
									parentId,
									pageId,
									repliedTo: author.id
								},
								update(cache: any, { data: { createReply } }: any) {
									const data = cache.readQuery({
										query: COMMENTS_QUERY,
										variables: {
											parentId: pageId,
											limit: 10,
											offset: props.offset
										}
									}) as any

									data.queryComment.edges
										.find((comment: any) => comment.node.id === parentId)
										.node.replies.push(createReply)

									cache.writeQuery({
										query: COMMENTS_QUERY,
										variables: {
											parentId: pageId,
											limit: 10,
											offset: props.offset
										},
										data
									})
								}
							})

							changeOpen(!open)
						} else {
							await mutate({
								variables: {
									body: values.body,
									pageId,
									parentId: id,
									repliedTo: author.id
								},
								update(cache: any, { data: { createReply } }: any) {
									const data = cache.readQuery({
										query: COMMENTS_QUERY,
										variables: {
											parentId: otherParentId,
											limit: 10,
											offset: 0
										}
									}) as any

									data.queryComment.edges
										.find((comment: any) => comment.node.id === id)
										.node.replies.push(createReply)

									console.log('DATA', data)

									cache.writeQuery({
										query: COMMENTS_QUERY,
										variables: {
											parentId: otherParentId
										},
										data
									})
								}
							})

							changeOpen(!open)
						}

						resetForm()
						setSubmitting(false)
					}}
					render={formikProps => (
						<FormContainer
							{...props}
							{...formikProps}
							formInputs={[
								{
									type: 'text',
									name: 'body',
									placeholder: 'place a comment',
									component: InputField
								}
							]}
						/>
					)}
				/>
			)}
		</React.Fragment>
	)
}

export default compose(graphql(CREATE_REPLY_MUTATION))(CreateReply)
