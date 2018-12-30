import * as React from 'react'
import { Comment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import { CommentListLayout } from '../styles'
import CreateReply from './CreateReply'
import LikeComment from './LikeComment'
import {
	MyCommentFragmentReplies,
	Maybe
} from '../../../apollo/components/apollo-components'

interface IProps {
	replies: Maybe<MyCommentFragmentReplies[]>
	parentComment: MyCommentFragmentReplies
}

const styles = {
	CommentContent: {
		marginTop: '1rem'
	}
}

function ReplyComments({ replies, parentComment }: IProps): JSX.Element {
	return (
		<React.Fragment>
			{replies !== null
				? replies.map(reply => (
						<Comment as="span" key={reply.id}>
							<Comment.Content style={styles.CommentContent}>
								<Comment.Author as="span">
									<Link
										to={`/profile/${reply.author.username}`}
									>
										{reply.author.username}
									</Link>
								</Comment.Author>
								<Comment.Metadata>
									<div>
										<CommentListLayout>
											<Moment
												fromNow
												date={reply.createdAt}
											/>
										</CommentListLayout>
									</div>
									<div>
										<CommentListLayout>
											<Icon name="long arrow alternate right" />
											<Link
												to={`/profile/${
													reply.repliedTo!.username
												}`}
											/>
											{reply.repliedTo!.username}
											<LikeComment id={reply.id} />
											<span>{reply.ratings.vote}</span>
										</CommentListLayout>
									</div>
								</Comment.Metadata>

								<Comment.Text>
									<CommentListLayout>
										{reply.body}
									</CommentListLayout>
								</Comment.Text>
								<Comment.Actions>
									<CreateReply
										parentComment={parentComment}
										comment={reply}
										reply={true}
									/>
								</Comment.Actions>
							</Comment.Content>
						</Comment>
				  ))
				: null}
		</React.Fragment>
	)
}

export default ReplyComments
