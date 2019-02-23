import * as React from 'react'
import { Header, Segment, TransitionablePortal } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled(Segment)`
	position: fixed;
	left: 50%;
	top: 10%;
	z-index: 1000;
`

interface IProps {
	open: boolean
}

export const OfflinePopup: React.FC<IProps> = () => {
	return (
		<TransitionablePortal
			closeOnTriggerClick
			onOpen={() => true}
			onClose={() => false}
			open={true}
			openOnTriggerClick
		>
			<Container>
				<Header>Website is currently offline</Header>
			</Container>
		</TransitionablePortal>
	)
}
