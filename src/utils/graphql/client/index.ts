import gql from 'graphql-tag'

export const CHANGE_THEME = gql`
	mutation ChangeTheme($theme: String!) {
		changeTheme(theme: $theme) @client {
			theme
		}
	}
`
