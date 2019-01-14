import * as React from 'react'
import { Icon } from 'semantic-ui-react'
import { graphql, ChildMutateProps } from 'react-apollo'
import styled from 'styled-components'

import { LIKE_COMMENT } from '../graphql/server'

const LikeSpan = styled.span`
	cursor: pointer;
	margin-left: 0.3rem;
`

interface IProps {
	id: string
}

class LikeComment extends React.Component<ChildMutateProps<IProps>> {
	_handleSubmit = () => {
		this.props.mutate({
			variables: {
				commentId: this.props.id
			}
			// optimisticResponse: {}
		})
	}

	render() {
		return (
			<LikeSpan onClick={this._handleSubmit}>
				<Icon name="thumbs up" />
			</LikeSpan>
		)
	}
}

export default graphql<IProps>(LIKE_COMMENT)(LikeComment as any)
