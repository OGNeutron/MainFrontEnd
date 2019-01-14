import styled, { createGlobalStyle } from 'styled-components'

// const GlobalStyles: any = injectGlobal`
// 	body: ${(props: any) => props.theme.background}
// `

export const GlobalStyle = createGlobalStyle`
        /* body: {
            background: "#e2dcdc"
        } */

        body, html {
            height: 100vh;
            font-family: 'Fira Sans', sans-serif;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none
        }
    `

export const MainLayoutStyle: any = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: ${props => props.theme.siteBackground};
	/* height: 100%; */
	color: ${props => props.theme.textColour};
	/* display: grid; */
	/* height: 100vh; */

	@media (max-width: 750px) {
		margin-top: 0;
		/* grid-template-areas: 'nav  main friend';
		grid-template-columns: 0.3fr auto;
		transition: all 0.3s ease-in-out; */
	}
	/*
	@media (max-width: 900px) {
		grid-template-areas: 'nav  main friend';
		grid-template-columns: 0.1fr auto;
		transition: all 0.3s ease-in-out;
	}

	@media (min-width: 1024px) {
		grid-template-areas:
			'nav'
			'main';
		transition: all 0.3s ease-in-out;
	}  */
`

export const Container = styled<any>('div')`
	padding: 0.5rem;

	@media (min-width: 1024px) {
		width: ${props => props.width};
		margin: auto;
		margin-top: 6rem;
		height: 100%;
	}

	@media (max-width: 750px) {
		padding: 0.5rem;
		margin-left: 3.8rem;
	}
`
