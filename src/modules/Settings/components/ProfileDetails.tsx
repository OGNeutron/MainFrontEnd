import * as React from 'react'

import { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { Formik } from 'formik'
import { Mutation } from 'react-apollo'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import {
	UpdateProfileMutation,
	UpdateProfileVariables,
	GetProfileQueryUser,
	Maybe,
	GetProfileQueryQuery
} from '../../../apollo/components/apollo-components'
import { FormContainer } from '../../../utils/form/FormContainer'
import { InputField } from '../../../utils/form/inputField'
import { UPDATE_PROFILE_DATA } from '../graphql/server'
import { GET_PROFILE_QUERY } from '../../profile/graphql/server'
import { PreviewImage, ImageLayout } from '../styles'
import { ProfileDetailValidationSchema } from '../../../utils/yupSchemas'
import { FileUpload } from '../../../utils/form/FileUpload'

interface IPreview extends File {
	preview: string
}

interface FormValues {
	username: string
	oldPassword: string
	newPassword: string
	avatar: any
}

interface IProps {
	profile: Maybe<GetProfileQueryUser>
}

const ProfileDetails: React.FunctionComponent<IProps & RouteComponentProps<{}>> = ({
	profile,
	history
}): JSX.Element => {
	const [files, changeFile] = useState<IPreview[]>([])

	return (
		<div>
			<h2>Profile Details</h2>
			<h5>Profile Avatar</h5>
			<ImageLayout>
				<FileUpload
					onDrop={acceptedFiles => {
						const preview = acceptedFiles.map(file =>
							Object.assign(file, { preview: URL.createObjectURL(file) })
						)
						changeFile(preview as any)

						const reader = new FileReader()
						reader.onload = () => {
							// const fileAsBinaryString = reader.result
							// do whatever you want with the file content
						}
						reader.onabort = () => console.log('file reading was aborted')
						reader.onerror = () => console.log('file reading has failed')

						reader.readAsBinaryString(acceptedFiles[0])
					}}
				/>
				{files.map(file => (
					<PreviewImage
						key={file.name}
						style={{ backgroundSize: 'cover' }}
						src={file.preview}
					/>
				))}
			</ImageLayout>

			<h5>User Details</h5>
			<Mutation<UpdateProfileMutation, UpdateProfileVariables> mutation={UPDATE_PROFILE_DATA}>
				{mutate => {
					return (
						<Formik<FormValues>
							initialValues={{
								username: '',
								oldPassword: '',
								newPassword: '',
								avatar: ''
							}}
							validationSchema={ProfileDetailValidationSchema}
							onSubmit={async (values, { resetForm, setSubmitting }) => {
								await mutate({
									variables: {
										username: values.username,
										oldPassword: values.oldPassword,
										newPassword: values.newPassword,
										avatar: files[0]
									},
									update(cache, { data }) {
										if (profile !== null) {
											const cacheData: Maybe<
												GetProfileQueryQuery
											> = cache.readQuery({
												query: GET_PROFILE_QUERY,
												variables: {
													username: profile.username,
													limit: 10,
													offset: 0
												}
											})

											if (
												cacheData !== null &&
												cacheData.getProfile !== null
											) {
												if (
													data !== undefined &&
													data.updateProfile !== null
												) {
													const result = {
														getProfile: {
															__typename:
																cacheData.getProfile.__typename,
															errors: cacheData.getProfile.errors,
															user: {
																...cacheData.getProfile.user,

																avatar_url: {
																	url: data.updateProfile.avatar!
																		.url,
																	__typename:
																		data.updateProfile
																			.__typename
																}
															}
														}
													}

													cache.writeQuery({
														query: GET_PROFILE_QUERY,
														variables: {
															username: profile.username,
															limit: 10,
															offset: 0
														},
														data: result
													})

													history.push(`/profile/${profile.username}`)
												}
											}
										} else {
											console.error('no profile')
										}
									}
								})

								resetForm()
								setSubmitting(false)
							}}
							render={() => (
								<FormContainer
									submitButton={true}
									formInputs={[
										{
											type: 'text',
											name: 'username',
											placeholder: 'Username',
											prefix: (
												<Icon
													type="user"
													style={{ color: 'rgba(0,0,0,.25)' }}
												/>
											) as any,
											component: InputField
										},
										{
											type: 'password',
											name: 'oldPassword',
											placeholder: 'Old Password',
											prefix: (
												<Icon
													type="password"
													style={{ color: 'rgba(0,0,0,.25)' }}
												/>
											) as any,
											component: InputField
										},
										{
											type: 'password',
											name: 'newPassword',
											placeholder: 'New Password',
											prefix: (
												<Icon
													type="password"
													style={{ color: 'rgba(0,0,0,.25)' }}
												/>
											) as any,
											component: InputField
										}
									]}
								/>
							)}
						/>
					)
				}}
			</Mutation>
		</div>
	)
}

export default withRouter<IProps & RouteComponentProps<{}>>(ProfileDetails as any)
