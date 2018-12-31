import * as React from 'react'
import {
	render,
	fireEvent,
	cleanup,
	waitForElement
} from 'react-testing-library'

import ProfileComponent from '../components/ProfileComponent'

afterEach(cleanup)

test("Profile component and it's relavant data shows up", async () => {
	const mockCurrentUser = {
		loggedIn: true,
		username: 'bob',
		createdAt: Date.now(),
		avatar_url: {
			url:
				'http://res.cloudinary.com/dmxf3jh8t/image/upload/v1524175832/pillarsofcreation_m6prxe.jpg'
		},
		id: '1',
		friend_requests: [],
		friends: []
	}

	const mockUser = {
		loggedIn: true,
		username: 'bob',
		createdAt: Date.now(),
		avatar_url: {
			url:
				'http://res.cloudinary.com/dmxf3jh8t/image/upload/v1524175832/pillarsofcreation_m6prxe.jpg'
		},
		id: '1',
		friend_requests: [],
		friends: []
	}

	const { getByTestId } = render(
		<ProfileComponent user={mockUser} currentUser={mockCurrentUser} />
	)

	const username = await waitForElement(() => getByTestId('bob'))

	expect(username).toBe('bob')
})
