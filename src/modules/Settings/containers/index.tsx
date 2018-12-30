import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

import { CURRENT_THEME_QUERY } from '../../../apollo/graphql/client'
import { CHANGE_THEME } from '../../../utils/graphql/client'

const SettingLayout = styled.div`
	color: ${props => props.theme.color};
`
interface IProps {
	currentTheme: any
	changeTheme: any
}
class SettingContainer extends React.Component<IProps> {
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
			</SettingLayout>
		)
	}
}

export default compose(
	graphql(CURRENT_THEME_QUERY, { name: 'currentTheme' }),
	graphql(CHANGE_THEME, { name: 'changeTheme' })
)(SettingContainer as any)
