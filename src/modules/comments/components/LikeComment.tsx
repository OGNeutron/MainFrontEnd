import * as React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { LikeCommentComponent } from '../../../apollo/components/apollo-components'
import { COMMENTS_QUERY } from '../graphql/server'

const LikeSpan = styled.span`
	cursor: pointer;
	margin-left: 0.3rem;
`

interface IProps {
	id: string
	pageId: string
}

const LikeComment: React.FC<IProps> = props => {
	// _handleSubmit = async () => {
	// 	const { mutate, pageId, id } = this.props
	// 	console.log('PAGEID', pageId)
	// 	await mutate({
	// 		variables: {
	// 			commentId: id
	// 		},
	// 		update(cache, { data }) {
	// 			const cacheData: Maybe<QueryCommentQuery> = cache.readQuery({
	// 				query: COMMENTS_QUERY,
	// 				variables: {
	// 					parentId: pageId,
	// 					limit: 10,
	// 					offset: 0
	// 				}
	// 			})

	// 			const likeComment = data

	// 			console.log(likeComment)
	// 			console.log('CACHE_DATA', cacheData)

	// 			if (
	// 				cacheData !== null &&
	// 				cacheData.queryComment !== null &&
	// 				cacheData.queryComment.edges !== null
	// 			) {
	// 				console.log('EDGES', cacheData.queryComment.edges)
	// 				const filtered = cacheData.queryComment.edges.filter(comment => {
	// 					console.log(comment.node.id)
	// 					// if () {

	// 					// }
	// 					// return comment.node.id !== likeComment.id
	// 				})

	// 				console.log('FILTERED', filtered)
	// 				// cacheData.edges.
	// 			}

	// 			console.log('CACHE_DATA', cacheData)
	// 		}
	// 	})
	// }

	const { pageId, id } = props

	return (
		<LikeCommentComponent>
			{mutate => {
				return (
					<LikeSpan
						onClick={() => {
							mutate({
								variables: { commentId: id },
								refetchQueries: [
									{
										query: COMMENTS_QUERY,
										variables: {
											parentId: pageId,
											limit: 10,
											offset: 0
										}
									}
								]
							})
						}}
					>
						<Icon name="thumbs up" />
					</LikeSpan>
				)
			}}
		</LikeCommentComponent>
	)
}

// export default graphql<IProps>(LIKE_COMMENT)(LikeComment as any)
export default LikeComment
