import * as React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Button = styled.a`
	text-decoration: none;
	text-align: center;
	color: ${props => props.theme.textColour};
	padding: 1rem 0;
	border: 1px solid black;
	cursor: pointer;

	a {
		width: 100%;
	}
`

const Layout = styled.div`
	display: grid;
	grid-gap: 1rem;
	text-align: center;
	margin: auto;
	width: 50%;
	padding: 0.5rem;
	margin-top: 1rem;

	@media (max-width: 700px) {
		width: 100%;
	}
`

export default function ThirdPartyAuthentication() {
	// const url = 'https://my-prisma-backend.herokuapp.com'
	const url =
		process.env.NODE_ENV === 'production'
			? 'https://my-prisma-backend.herokuapp.com'
			: 'http://localhost:2000'

	return (
		<Layout>
			<Button href={`${url}/api/v1/auth/github`}>
				<Icon name="github" />
				Github
			</Button>
			{/* <Button href={`${url}/api/v1/auth/facebook`}>
				<Icon name="facebook" />
				Facebook
			</Button>
			<Button href={`${url}/api/v1/auth/twitter`}>
				<Icon name="twitter" />
				Twitter
			</Button> */}
		</Layout>
	)
}
