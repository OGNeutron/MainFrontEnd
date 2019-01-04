import styled from 'styled-components'

export const NavItem: any = styled.div`
	align-self: center;
	font-size: 1.5rem;
	justify-content: space-around;
	padding: 0 1rem;

	a {
		transition: color 0.3s ease-in-out;
		text-decoration: none;
		color: ${props => props.theme.textColour};
	}

	@media (max-width: 768px) {
		margin-bottom: 1rem;
	}
`

export const MainNav: any = styled('nav')`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	background: ${props => props.theme.headerColour};
	padding: 0 1rem;
	box-shadow: 1px 7px 29px 0px rgba(0, 0, 0, 0.5);
	z-index: 1000;

	@media (max-width: 750px) {
		width: 10%;
		top: 0;
		bottom: 0;
		flex-direction: column;
	}
`

export const NavBrand: any = styled.div`
	background: 1px solid red;
	margin-right: 1rem;
	font-size: 2rem;
	padding: 1.5rem 0;
	justify-content: center;
	a {
		transition: color 0.3s ease-in-out;
		text-decoration: none;
		color: ${props => props.theme.textColour};
	}

	@media (max-width: 768px) {
		display: none;
	}
`

export const NavBrandIcon = styled(NavBrand)`
	display: none;
	font-size: 1.4rem;
	transition: color 0.3s ease-in-out;
	color: ${(props: any) => props.theme.color};

	@media (max-width: 768px) {
		display: block;
		align-self: center;
		flex-direction: column;
		flex: 0;
		margin-bottom: 1rem;
		padding-left: 0.9rem;
		font-size: 1.5rem;
	}
`

export const DropDownContent: any = styled('div')`
	position: absolute;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	margin-top: 0.4rem;
	padding: 0.4rem;

	background: ${props =>
		props.theme.mainHeaderBackground ? props.theme.mainHeaderBackground : null};

	a {
		display: block;
	}

	@media (max-width: 768px) {
		right: 10;
	}
`

export const DropDownButton: any = styled(NavItem)`
	margin: 0;
	cursor: pointer;
	font-size: 1.4rem;

	i {
		color: ${(props: any) => (props.theme.color ? props.theme.color : '#000')};
		transition: color 0.8s ease-in-out;

		&:hover {
			color: #c9c9c9;
		}
	}
`

export const DropDownWrapper: any = styled.div`
	& ${DropDownContent} {
		visibility: visible;
		opacity: 1;
		display: block;
	}
`
