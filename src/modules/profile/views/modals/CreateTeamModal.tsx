import * as React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import * as yup from 'yup'
import { withFormik } from 'formik'
import { withRouter } from 'react-router-dom'

import { CREATE_TEAM_MUTATION } from '../../graphql/server'
import { CreateTeamMutation_createTeam } from '../../../../operation-result-types'
import { FormContainer } from '../../../../utils/form/FormContainer'
import { InputField } from '../../../../utils/form/inputField'
import { SHOW_TEAMS_QUERY } from '../../../../utils/graphql/server'

interface IFormProps {
	name?: string
}

interface FormValues {
	name: string
}

interface IProps {
	mutate: ({ variables }: any) => void
	history: any
	authorId: any
}

// interface IResponse {
// 	data: {
// 		createTeam: CreateTeamMutation_createTeam
// 	}
// }

function CreateTeamModal(props) {
	return (
		<Modal trigger={<Button>Create Team</Button>}>
			<Modal.Header>Create a Team</Modal.Header>
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
	)
}

const validationSchema = yup.object().shape({
	name: yup
		.string()
		.required()
		.min(3)
})

export default compose<IProps, any>(
	withRouter,
	graphql<CreateTeamMutation_createTeam>(CREATE_TEAM_MUTATION),
	withFormik<IProps, IFormProps, FormValues>({
		mapPropsToValues: () => ({ name: '' }),
		validationSchema,
		async handleSubmit(
			{ name },
			{ props: { mutate, history, authorId }, setSubmitting }
		) {
			const response: any = await mutate({
				variables: {
					name
				},
				update(cache, { data: { createTeam } }) {
					const data = cache.readQuery({
						query: SHOW_TEAMS_QUERY,
						variables: {
							authorId
						}
					})

					data.showTeams.push(createTeam)

					cache.writeQuery({
						query: SHOW_TEAMS_QUERY,
						variables: {
							authorId
						},
						data
					})
				}
			})

			if (response.data.createTeam.slug) {
				if (
					response.data.createTeam.channels &&
					response.data.createTeam.channels[0].slug
				) {
					history.push(
						`/chat-app/${response.data.createTeam.slug}/${
							response.data.createTeam.channels[0].slug
						}`
					)
				}
			}

			setSubmitting(false)
		}
	})
)(CreateTeamModal)
