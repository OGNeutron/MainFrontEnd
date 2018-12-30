import styled from 'styled-components'
import { Box } from 'rebass'

export const ChatLayout = styled(Box)`
	display: grid;
	grid-gap: 10px;

	@media (min-width: 751px) {
		grid-template-columns: 1fr 2fr 1fr;
	}

	@media (max-width: 750px) {
		/* grid-template-rows: 1fr 2fr 1fr; */
		grid-template-rows: TeamBarComponent MemberBarComponent ChatComponent;
	}
	/* grid-template: ChatComponent MemberBar TeamBar; */
`

export const ChatComponentLayout = styled.div`
	grid-area: 'ChatComponent';

	@media (max-width: 750px) {
		order: 3;
	}
	@media (min-width: 750px) {
		order: 2;
	}
`

export const MemberBarLayout = styled.div`
	grid-area: 'MemberBarComponent';
	padding-left: 10px;

	@media (min-width: 750px) {
		order: 2;
		border-left: 1px solid black;
	}

	@media (max-width: 750px) {
		order: 3;
		border-left: 1px solid black;
	}
	/* grid-area: MemberBar; */
`

export const TeamBarLayout = styled.div`
	padding: 1px;
	grid-area: 'TeamBarComponent';
	@media (min-width: 750px) {
		order: 1;
		padding-right: 0.5rem;
		border-right: 1px solid black;
	}
`
