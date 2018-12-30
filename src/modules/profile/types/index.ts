interface Friend {
	username: string
	id: string
	avatar_url: {
		url: string
	}
}

export interface IProfile {
	friend_requests: Friend[]
	id: string
	friends: Friend[]
}
