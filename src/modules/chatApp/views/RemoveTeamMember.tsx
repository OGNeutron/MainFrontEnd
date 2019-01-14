import * as React from 'react'
import { graphql, ChildMutateProps } from 'react-apollo'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { REMOVE_TEAM_MEMBER } from '../graphql/server'
import {
	RemoveTeamMemberMutation,
	RemoveTeamMemberVariables
} from '../../../apollo/components/apollo-components'

const RemoveButton = styled.span`
	cursor: pointer;
	opacity: 1;
	float: right;
	text-transform: lowercase;
	transition: opacity 1s ease-in-out;
	&:hover {
		opacity: 0.5;
	}

	&:i {
		color: '#000';
	}
`

interface Member {
	id: string
	username: string
}

interface IProps {
	member: Member
	teamId: any
}

class RemoveMemberButton extends React.Component<
	ChildMutateProps<IProps, RemoveTeamMemberMutation, RemoveTeamMemberVariables>
> {
	_removeMember = async () => {
		const { mutate, teamId, member } = this.props

		await mutate({
			variables: {
				teamId,
				userId: member.id
			}
		})
	}

	render() {
		return (
			<RemoveButton onClick={this._removeMember}>
				<Icon style={{ color: 'black' }} name="delete" />
			</RemoveButton>
		)
	}
}

export default graphql<IProps>(REMOVE_TEAM_MEMBER)(RemoveMemberButton as any)
