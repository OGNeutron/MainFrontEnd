interface Author {
	username: string
	id: string
}

export interface Comment {
	id: string
	body: string
	createdAt: string
	parentId: string
	pageId: string
	ratings: {
		vote: string
		id: string
		author: Author
	}
	repliedTo: {
		username: string
		id: string
	}
	replies: Comment[]
	author: Author
}
