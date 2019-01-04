import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, Divider } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import { RouteComponentProps } from 'react-router-dom'

import PrivacySetting from '../components/PrivacySetting'
import { BlockedUsersComponent } from '../components/BlockedUsers'
import { CURRENT_THEME_QUERY } from '../../../apollo/graphql/client'
import { CHANGE_THEME } from '../../../utils/graphql/client'
import { GetProfileQueryComponent } from '../../../apollo/components/apollo-components'
import { Spinner } from '../../../utils/components/animations/loader'
import ProfileDetails from '../components/ProfileDetails'

const SettingLayout = styled.div`
	color: ${props => props.theme.color};
	margin: auto;

	@media (max-width: 780px) {
		width: 75%;
	}
`
interface IProps {
	currentTheme: any
	changeTheme: any
}

class SettingContainer extends React.PureComponent<
	IProps & RouteComponentProps<{ username: string }>
> {
	state = {
		checked: this.props.currentTheme.theme === 'light' ? false : true
	}

	changeTheme = () => {
		this.props.changeTheme({
			variables: {
				theme: 'dark'
			}
		})
	}

	render() {
		const {
			currentTheme: {
				clientTheme: { theme }
			}
		} = this.props
		return (
			<SettingLayout>
				<GetProfileQueryComponent
					variables={{ username: this.props.match.params.username }}
				>
					{({ data, loading, error }) => {
						if (!data && loading === false) {
							return <div>Something went wrong</div>
						}

						if (error) {
							return <div>An error has occurred: ${error.message}</div>
						}

						return loading == false &&
							data !== undefined &&
							data.getProfile !== null ? (
							<React.Fragment>
								<h2>Settings</h2>

								<div style={{ display: 'flex' }}>
									<Checkbox
										onChange={this.changeTheme}
										toggle={this.state.checked}
									/>
									<span
										style={{
											marginLeft: '0.8rem',
											marginBottom: '0.5rem',
											paddingBottom: '0.5rem',
											fontWeight: 'bolder'
										}}
									>
										{theme} theme
									</span>
								</div>

								<PrivacySetting profile={data.getProfile.user} />
								<Divider />
								<BlockedUsersComponent profile={data.getProfile.user} />
								<Divider />
								<ProfileDetails profile={data.getProfile.user} />
							</React.Fragment>
						) : (
							<Spinner />
						)
					}}
				</GetProfileQueryComponent>
			</SettingLayout>
		)
	}
}

export default compose(
	graphql(CURRENT_THEME_QUERY, { name: 'currentTheme' }),
	graphql(CHANGE_THEME, { name: 'changeTheme' })
)(SettingContainer as any)
