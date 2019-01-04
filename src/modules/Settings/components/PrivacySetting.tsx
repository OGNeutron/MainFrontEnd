import * as React from 'react'

import { useState, useEffect } from 'react'
import { Checkbox } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'

import {
	Maybe,
	GetProfileQueryUser,
	SetProfilePrivacyVariables,
	SetProfilePrivacyMutation
} from '../../../apollo/components/apollo-components'
import { SET_PROFILE_PRIVACY } from '../graphql/server'

interface IProps {
	profile: Maybe<GetProfileQueryUser>
}

const PrivacySetting: React.FunctionComponent<IProps> = ({ profile }): JSX.Element => {
	if (profile !== null) {
		// const privacyStatus = !profile.private
		const [profilePrivate, setPrivate] = useState(true)

		useEffect(() => {
			setPrivate(profile.private)
		}, [])

		return (
			<div>
				<h2>Privacy</h2>
				<Mutation<SetProfilePrivacyMutation, SetProfilePrivacyVariables>
					mutation={SET_PROFILE_PRIVACY}
				>
					{mutate => (
						<div style={{ display: 'flex' }}>
							<Checkbox
								onChange={async () => {
									setPrivate(
										profile.private === true ? false : true
									)
									mutate({
										variables: {
											bool:
												profilePrivate === true
													? false
													: true
										}
									}).then(response => {
										if (
											response &&
											response.data !== undefined &&
											response.data.setProfilePrivacy !==
												null
										) {
											setPrivate(
												response.data.setProfilePrivacy
													.private
											)
										}
									})
								}}
								toggle={profilePrivate}
							/>
							<span style={{ marginLeft: '0.5rem' }}>
								{profilePrivate
									? `currently private`
									: `currently not private`}
							</span>
						</div>
					)}
				</Mutation>
			</div>
		)
	} else {
		return <div>Something went wrong</div>
	}
}

export default PrivacySetting
