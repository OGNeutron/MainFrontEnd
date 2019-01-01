import styled from 'styled-components'

export const ProfileLayout: any = styled.div`
	overflow: hidden;
	@media (min-width: 1000px) {
		display: grid;
		grid-auto-columns: max-content;
		grid-template-columns: 1fr 2fr 1fr;
	}
	grid-gap: 1rem;

	@media (max-width: 750px) {
		width: 100%;
		display: grid;
		grid-template-areas: profile friend comments;
	}
`
export const CommentLayout = styled.div`
	grid-area: 'comments';

	@media (min-width: 751px) {
		position: relative;
	}

	@media (max-width: 750px) {
		order: 3;
		width: 100%;
	}
`

export const FriendsLayout: any = styled.div`
	grid-area: 'friend';

	@media (min-width: 751px) {
		position: sticky;
	}

	@media (max-width: 750px) {
		order: 2;
		width: 100%;
	}
`

export const Profile: any = styled.div`
	grid-area: 'profile';

	@media (min-width: 751px) {
		position: sticky;
	}

	@media (max-width: 750px) {
		order: 1;
		width: 100%;
	}
`
