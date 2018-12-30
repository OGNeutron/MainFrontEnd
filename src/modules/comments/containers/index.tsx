import * as React from 'react'
import { useState } from 'react'
// import InfiniteScroll from 'react-simple-infinite-scroll'
import InfiniteScroll from 'react-infinite-scroller'

import CommentList from '../components/CommentList'
import CreateComment from '../components/CreateComment'
import { Spinner } from '../../../utils/components/animations/loader'
import { IUser } from '../../../types'
import { COMMENTS_QUERY } from '../graphql/server'
import { Query } from 'react-apollo'
import {
	QueryCommentVariables,
	QueryCommentQuery
} from '../../../apollo/components/apollo-components'

interface IProps {
	pageId: string
	currentUser: IUser
}

const CommentContainer: React.SFC<IProps> = (props): JSX.Element => {
	const [offsetInt] = useState(0)
	const [more] = useState(false)

	// useEffect(() => {
	// 	changeMore(true)
	// }, [])

	function hasMoreComments(func, length) {
		func({
			variables: {
				parentId: props.pageId,
				limit: 5,
				offset: length + 10
			},
			updateQuery(prev, { fetchMoreResult }) {
				if (!fetchMoreResult) return prev

				// if (!fetchMoreResult.queryComment.pageInfo.hasNextPage) {
				// 	changeMore(false)
				// }

				// console.log('PREV', prev)
				// console.log('FETCH', fetchMoreResult)

				let newEdges = [
					...prev.queryComment.edges,
					...fetchMoreResult.queryComment.edges
				]

				// @ts-ignore
				const newObject = {
					queryComment: {
						pageInfo: prev.queryComment.pageInfo,
						__typename: prev.queryComment.__typename,
						edges: newEdges
					}
				}

				return newObject
				// Object.assign({}, prev, {
				// 	edges: [...newEdges]
				// })
			}
		})
		// changeOffset(offsetInt + 5)
	}

	return (
		<Query<QueryCommentQuery, QueryCommentVariables>
			query={COMMENTS_QUERY}
			variables={{
				parentId: props.pageId,
				limit: 10,
				offset: offsetInt
			}}
		>
			{({ data, loading, fetchMore }) => {
				// console.log(data)
				// console.log(loading)
				if (!data) {
					console.log('Problem happened with comments')
					return <Spinner />
				}

				// if (loading == false && data.queryComment) {
				// 	if (
				// 		data.queryComment.pageInfo.hasNextPage == true &&
				// 		more == false
				// 	) {
				// 		changeMore(true)
				// 	}
				// }

				return loading == false && data.queryComment ? (
					<React.Fragment>
						<CreateComment parentId={props.pageId} />
						<InfiniteScroll
							pageStart={0}
							threshhold={250}
							hasMore={more}
							loader={<Spinner key={'spinner' + 0} />}
							loadMore={() =>
								hasMoreComments(
									fetchMore,
									data.queryComment.edges.length
								)
							}
						>
							<CommentList
								currentUser={props.currentUser}
								comments={
									data.queryComment.edges == undefined
										? []
										: data.queryComment.edges
								}
							/>
						</InfiniteScroll>
					</React.Fragment>
				) : (
					<Spinner />
				)
			}}
		</Query>
	)
}

export default CommentContainer