import * as React from 'react'
import { useState } from 'react'
import { Query } from 'react-apollo'
// import InfiniteScroll from 'react-simple-infinite-scroll'
import InfiniteScroll from 'react-infinite-scroller'
import {
	QueryCommentQuery,
	QueryCommentVariables
} from '../../../apollo/components/apollo-components'
import { IUser } from '../../../types'
import { Spinner } from '../../../utils/components/animations/loader'
import CommentList from '../components/CommentList'
import CreateComment from '../components/CreateComment'
import { COMMENTS_QUERY } from '../graphql/server'

interface IProps {
	pageId: string
	currentUser: IUser
}

const CommentContainer: React.FunctionComponent<IProps> = (props): JSX.Element => {
	const [offsetInt] = useState(0)
	const [more] = useState(false)

	// useEffect(() => {
	// 	changeMore(true)
	// }, [])

	function hasMoreComments(func: any, length: any) {
		func({
			variables: {
				parentId: props.pageId,
				limit: 5,
				offset: length + 10
			},
			updateQuery(prev: any, { fetchMoreResult }: { fetchMoreResult: any }) {
				if (!fetchMoreResult) return prev

				// if (!fetchMoreResult.queryComment.pageInfo.hasNextPage) {
				// 	changeMore(false)
				// }

				let newEdges = [...prev.queryComment.edges, ...fetchMoreResult.queryComment.edges]

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
				if (!data) {
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
							hasMore={more}
							loader={<Spinner key={'spinner' + 0} />}
							loadMore={() =>
								hasMoreComments(fetchMore, data.queryComment.edges.length)
							}
						>
							<CommentList
								pageId={props.pageId}
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
