import styled from 'styled-components'

export const PreviewImage = styled.img`
	background-size: cover;
	width: 200px;
	height: 200px;
	margin-right: 1rem;

	@media (max-width: 750px) {
		margin-top: 1rem;
	}
`

export const ImageLayout = styled.div`
	@media (min-width: 780px) {
		display: grid;
		grid-template-areas: 'a a';
	}
`
