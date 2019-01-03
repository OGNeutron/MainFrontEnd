import * as React from 'react'
import { Comment } from 'semantic-ui-react'
import { FormikProps, Formik } from 'formik'
import { compose, graphql, ChildMutateProps } from 'react-apollo'

import { Comment as IComment } from '../types'
import { validationSchema } from '../utils/yupSchemas'
import { CREATE_REPLY_MUTATION, COMMENTS_QUERY } from '../graphql/server'
import { FormContainer } from '../../../utils/form/FormContainer'
import { InputField } from '../../../utils/form/inputField'
import { CommentListLayout } from '../styles'

interface IProps {
	comment: IComment
	parentComment: IComment
	reply: boolean
}

interface IState {
	open: boolean
}

class CreateReply extends React.Component<FormikProps<any> & ChildMutateProps<IProps>, IState> {
	state = {
		open: false
	}

	_toggle = () => this.setState({ open: !this.state.open })

	render() {
		return (
			<React.Fragment>
				<Comment.Action onClick={this._toggle}>
					{' '}
					<CommentListLayout>Reply</CommentListLayout>{' '}
				</Comment.Action>
				{this.state.open && (
					<Formik
						initialValues={{ body: '' }}
						validationSchema={validationSchema}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							const {
								reply,
								mutate,
								comment: { parentId, author, id },
								parentComment: { pageId }
							} = this.props
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
												offset: 0
											}
										}) as any

										data.queryComment.edges
											.find((comment: any) => comment.node.id === parentId)
											.node.replies.push(createReply)

										cache.writeQuery({
											query: COMMENTS_QUERY,
											variables: {
												parentId: pageId
											},
											data
										})
									}
								})
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
												parentId: pageId,
												limit: 10,
												offset: 0
											}
										}) as any

										data.queryComment.edges
											.find((comment: any) => comment.node.id === id)
											.node.replies.push(createReply)

										cache.writeQuery({
											query: COMMENTS_QUERY,
											variables: {
												parentId: pageId
											},
											data
										})
									}
								})
							}

							this.setState({ open: false })

							resetForm()
							setSubmitting(false)
						}}
						render={formikProps => (
							<FormContainer
								{...this.props}
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
}

export default compose(graphql(CREATE_REPLY_MUTATION))(CreateReply)
