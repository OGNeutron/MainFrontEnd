import * as React from 'react'
import { useReducer, useState } from 'react'
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
import { offsetReducer } from '../reducers'

interface IProps {
	pageId: string
	currentUser: IUser
}

const CommentContainer: React.FunctionComponent<IProps> = (props): JSX.Element => {
	const [more] = useState(false)
	// @ts-ignore
	const [offset, dispatch] = useReducer(offsetReducer, 0)

	// useEffect(() => {
	// 	changeMore(true)
	// }, [])

	function hasMoreComments(func: any, _: any) {
		dispatch({ type: 'INCREMENT' })
		func({
			variables: {
				parentId: props.pageId,
				limit: 5,
				offset: offset
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

				console.log(newObject)

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
				offset: offset
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

				console.log('OFFSET', offset)

				return loading == false && data.queryComment ? (
					<React.Fragment>
						<CreateComment
							count={data.queryComment.edges.length}
							parentId={props.pageId}
							pageId={props.pageId}
							offset={offset}
						/>

						<InfiniteScroll
							pageStart={0}
							hasMore={more}
							loader={<Spinner key={'spinner' + 0} />}
							loadMore={() =>
								hasMoreComments(fetchMore, data.queryComment.edges.length)
							}
						>
							<CommentList
								offset={offset}
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
