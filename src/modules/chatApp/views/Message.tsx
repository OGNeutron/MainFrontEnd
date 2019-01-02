import * as React from 'react'
import { Comment } from 'semantic-ui-react'

export const Message = ({ message: { url, body, filetype } }: any) => {
	console.log(url, filetype)
	// if (url != 'empty') {
	// 	if (filetype.startsWith('image/')) {
	// 		return <img src={url} alt="" />
	// 	} else if (filetype === 'text/plain') {
	// 		return <RenderText url={url} />
	// 	} else if (filetype.startsWith('audio/')) {
	// 		return (
	// 			<div>
	// 				<audio controls>
	// 					<source src={url} type={filetype} />
	// 				</audio>
	// 			</div>
	// 		)
	// 	}
	// }
	return <Comment.Text>{body}</Comment.Text>
}
