import * as React from 'react'
import styled from 'styled-components'

const FooterLayout = styled.div`
	background: ${props => props.theme.siteBackground};
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	margin-top: 5rem;
`

export const Footer: React.FunctionComponent = (): JSX.Element => {
	return (
		<FooterLayout>
			<h1>Footer</h1>
		</FooterLayout>
	)
}
