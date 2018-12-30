import * as React from 'react'
import { graphql, ChildMutateProps } from 'react-apollo'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { REMOVE_CHANNEL_MEMBER } from '../graphql/server'
import {
	removeChannelMemberMutation,
	removeChannelMemberMutationVariables
} from '../../../operation-result-types'

const RemoveButton = styled.span`
	cursor: pointer;
	opacity: 1;
	float: right;
	text-transform: lowercase;
	transition: opacity 1s ease-in-out;
	&:hover {
		opacity: 0.5;
	}
`

interface Member {
	id: string
	username: string
}

interface IProps {
	member: Member
	channelId: any
}

class RemoveMemberButton extends React.Component<
	ChildMutateProps<
		IProps,
		removeChannelMemberMutation,
		removeChannelMemberMutationVariables
	>
> {
	_removeMember = async () => {
		console.log('working')
		const { mutate, channelId, member } = this.props

		await mutate({
			variables: {
				channelId,
				userId: member.id
			}
		})
	}

	render() {
		return (
			<RemoveButton onClick={this._removeMember}>
				<Icon name="delete" />
			</RemoveButton>
		)
	}
}

export default graphql<IProps>(REMOVE_CHANNEL_MEMBER)(RemoveMemberButton as any)
