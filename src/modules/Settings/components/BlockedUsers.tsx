import * as React from 'react'
import { List, Image, Button } from 'semantic-ui-react'

import {
	Maybe,
	GetProfileQueryUser,
	UnBlockUserMutation,
	UnBlockUserVariables,
	GetProfileQueryQuery
} from '../../../apollo/components/apollo-components'
import { Mutation } from 'react-apollo'
import { UN_BLOCK_USER } from '../graphql/server'
import { GET_PROFILE_QUERY } from '../../profile/graphql/server'
import styled from 'styled-components'

interface IProps {
	profile: Maybe<GetProfileQueryUser>
}

const BlockedUsersLayout = styled.div`
	.block-header {
		color: ${prop => prop.theme.textColour};
	}
`

export const BlockedUsersComponent: React.FunctionComponent<IProps> = ({ profile }): JSX.Element => {
	if (profile !== null && profile.blockedUsers !== null) {
		return (
			<BlockedUsersLayout style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
				<h3 className="block-header">Blocked Users</h3>
				<List>
					{profile.blockedUsers.map(user => (
						<List.Item key={user.id}>
							<List.Content floated="right">
								<Mutation<UnBlockUserMutation, UnBlockUserVariables>
									mutation={UN_BLOCK_USER}
								>
									{mutate => (
										<Button
											onClick={async () => {
												await mutate({
													variables: {
														id: user.id
													},
													update(
														cache,
														{
															data: {
																// @ts-ignore
																unblockUser
															}
														}
													) {
														const cacheData: Maybe<
															GetProfileQueryQuery
														> = cache.readQuery({
															query: GET_PROFILE_QUERY,
															variables: {
																username: profile.username
															}
														})

														if (
															cacheData !== null &&
															cacheData.getProfile !== null &&
															cacheData.getProfile.user !== null &&
															cacheData.getProfile.user.blockedUsers
														) {
															if (unblockUser !== null) {
																const result = cacheData.getProfile.user.blockedUsers.filter(
																	u => u.id === unblockUser.id
																)

																const changed = {
																	getProfile: {
																		__typename:
																			cacheData.getProfile
																				.__typename,
																		errors:
																			cacheData.getProfile
																				.errors,
																		user: {
																			...cacheData.getProfile
																				.user,
																			blockedUsers: [
																				...result
																			]
																		}
																	}
																}

																return cache.writeQuery({
																	query: GET_PROFILE_QUERY,
																	variables: {
																		username: profile.username
																	},
																	data: changed
																})
															}
														}
													}
												})
											}}
										>
											Unban
										</Button>
									)}
								</Mutation>
							</List.Content>
							<Image src={user.avatar_url.url} />
							<List.Content>
								<List.Header>{user.username}</List.Header>
							</List.Content>
						</List.Item>
					))}
				</List>
			</BlockedUsersLayout>
		)
	} else {
		return <div>Something went wrong</div>
	}
}
