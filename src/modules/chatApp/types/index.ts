interface IAuthor {
	username: string
	id: string
	avatar_url: IAvatarUrl
}

interface IAvatarUrl {
	url: string
}

export interface Messages {
	id: string
	body: string
	createdAt: string
	updatedAt: string
	author: IAuthor
}

export interface IChannel {
	id: string
	messages: Messages[]
	name: string
	slug: string
}
