import * as React from 'react'
import * as yup from 'yup'

import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Formik } from 'formik'
import { Mutation } from 'react-apollo'
import { Modal, Button } from 'semantic-ui-react'

import { CREATE_CHANNEL_MUTATION, SHOW_TEAM_QUERY } from '../../graphql/server'
import {
	CreateChannelMutation,
	CreateChannelMutationVariables,
	ShowTeamQuery
} from '../../../../operation-result-types'
import { FormContainer } from '../../../../utils/form/FormContainer'
import { InputField } from '../../../../utils/form/inputField'

interface IProps {
	teamId: string
	teamSlug: string
	toggleModal: any
	modalOpen: boolean
}

interface IFormValues {
	name: string
}

const validationSchema = yup.object().shape({
	name: yup
		.string()
		.required()
		.min(3)
})

const CreateChannelModal: React.FunctionComponent<IProps & RouteComponentProps<{}>> = ({
	teamId,
	teamSlug,
	history,
	toggleModal,
	modalOpen
}) => (
	<Mutation<CreateChannelMutation, CreateChannelMutationVariables>
		mutation={CREATE_CHANNEL_MUTATION}
	>
		{mutate => (
			<Formik
				initialValues={{ name: '' }}
				validationSchema={validationSchema}
				onSubmit={async ({ name }: IFormValues, { setSubmitting, resetForm }) => {
					const response = await mutate({
						variables: {
							name,
							teamId
						},
						update(cache, { data }: any) {
							const store: ShowTeamQuery | null = cache.readQuery({
								query: SHOW_TEAM_QUERY,
								variables: { teamSlug }
							})

							if (store != null && store.showTeam.channels != null) {
								store.showTeam.channels.push(data.createChannel)

								cache.writeQuery({
									query: SHOW_TEAM_QUERY,
									variables: {
										teamSlug
									},
									data: store
								})
							}
						}
					})

					toggleModal()
					setSubmitting(false)
					resetForm()

					// @ts-ignore
					history.push(`/chat-app/${teamSlug}/${response.data.createChannel.slug}`)
				}}
			>
				{props => (
					<Modal
						trigger={<Button onClick={toggleModal}>Create Channel</Button>}
						open={modalOpen}
						onClose={toggleModal}
					>
						<Modal.Header>Create Channel</Modal.Header>
						<Modal.Content>
							<FormContainer
								{...props}
								formInputs={[
									{
										name: 'name',
										type: 'text',
										placeholder: 'Create Team',
										component: InputField
									}
								]}
							/>
						</Modal.Content>
					</Modal>
				)}
			</Formik>
		)}
	</Mutation>
)

export default withRouter<IProps & RouteComponentProps<{}>>(CreateChannelModal)
