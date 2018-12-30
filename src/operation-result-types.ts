/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
	ok: boolean
	result: string
}

export interface Register {
	register: Register_register
}

export interface RegisterVariables {
	email: string
	password: string
	username: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
	id: string
	username: string
}

export interface Login_login {
	ok: boolean
	token: string | null
	refreshToken: string
	user: Login_login_user | null
}

export interface Login {
	login: Login_login
}

export interface LoginVariables {
	email: string
	password: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ForgotPassword
// ====================================================

export interface ForgotPassword_forgotPassword {
	ok: boolean
	result: string
}

export interface ForgotPassword {
	forgotPassword: ForgotPassword_forgotPassword
}

export interface ForgotPasswordVariables {
	email: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CheckToken
// ====================================================

export interface CheckToken_checkToken {
	ok: boolean
	result: string
}

export interface CheckToken {
	checkToken: CheckToken_checkToken
}

export interface CheckTokenVariables {
	token: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ResetPassword
// ====================================================

export interface ResetPassword_resetPassword {
	ok: boolean
	result: string
}

export interface ResetPassword {
	resetPassword: ResetPassword_resetPassword
}

export interface ResetPasswordVariables {
	id: string
	password: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AuthConfirmation
// ====================================================

export interface AuthConfirmation_authConfirmation {
	ok: boolean
	result: string
}

export interface AuthConfirmation {
	authConfirmation: AuthConfirmation_authConfirmation
}

export interface AuthConfirmationVariables {
	token: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: ChannelMessageSubscription
// ====================================================

export interface ChannelMessageSubscription_messageSubscription_node_author_avatar_url {
	url: string
}

export interface ChannelMessageSubscription_messageSubscription_node_author {
	id: string
	username: string
	avatar_url: ChannelMessageSubscription_messageSubscription_node_author_avatar_url
}

export interface ChannelMessageSubscription_messageSubscription_node {
	id: string
	body: string
	parentId: string
	author: ChannelMessageSubscription_messageSubscription_node_author
	createdAt: any
	updatedAt: any
}

export interface ChannelMessageSubscription_messageSubscription {
	node: ChannelMessageSubscription_messageSubscription_node | null
}

export interface ChannelMessageSubscription {
	messageSubscription: ChannelMessageSubscription_messageSubscription
}

export interface ChannelMessageSubscriptionVariables {
	channelId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeChannelMemberMutation
// ====================================================

export interface removeChannelMemberMutation_removeChannelMember_author {
	id: string
	username: string
}

export interface removeChannelMemberMutation_removeChannelMember_members {
	id: string
	username: string
	email: string
}

export interface removeChannelMemberMutation_removeChannelMember_messages_author_avatar_url {
	url: string
}

export interface removeChannelMemberMutation_removeChannelMember_messages_author {
	id: string
	username: string
	avatar_url: removeChannelMemberMutation_removeChannelMember_messages_author_avatar_url
}

export interface removeChannelMemberMutation_removeChannelMember_messages {
	id: string
	parentId: string
	body: string
	author: removeChannelMemberMutation_removeChannelMember_messages_author
	createdAt: any
	updatedAt: any
}

export interface removeChannelMemberMutation_removeChannelMember {
	id: string
	name: string
	slug: string
	author: removeChannelMemberMutation_removeChannelMember_author
	members: removeChannelMemberMutation_removeChannelMember_members[] | null
	messages: removeChannelMemberMutation_removeChannelMember_messages[] | null
}

export interface removeChannelMemberMutation {
	removeChannelMember: removeChannelMemberMutation_removeChannelMember
}

export interface removeChannelMemberMutationVariables {
	channelId: string
	userId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ShowTeamQuery
// ====================================================

export interface ShowTeamQuery_showTeam_moderators {
	id: string
	username: string
}

export interface ShowTeamQuery_showTeam_author_avatar_url {
	url: string
}

export interface ShowTeamQuery_showTeam_author {
	id: string
	username: string
	avatar_url: ShowTeamQuery_showTeam_author_avatar_url
}

export interface ShowTeamQuery_showTeam_members {
	id: string
	username: string
}

export interface ShowTeamQuery_showTeam_channels_members {
	id: string
	username: string
	email: string
}

export interface ShowTeamQuery_showTeam_channels {
	id: string
	name: string
	slug: string
	members: ShowTeamQuery_showTeam_channels_members[] | null
}

export interface ShowTeamQuery_showTeam {
	id: string
	name: string
	slug: string
	moderators: ShowTeamQuery_showTeam_moderators[] | null
	author: ShowTeamQuery_showTeam_author
	members: ShowTeamQuery_showTeam_members[] | null
	channels: ShowTeamQuery_showTeam_channels[] | null
	createdAt: any
	updatedAt: any
	confirmed: boolean
	online: boolean
}

export interface ShowTeamQuery {
	showTeam: ShowTeamQuery_showTeam
}

export interface ShowTeamQueryVariables {
	teamSlug: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ShowChannelQuery
// ====================================================

export interface ShowChannelQuery_showChannel_members {
	id: string
	username: string
	email: string
}

export interface ShowChannelQuery_showChannel_messages_author_avatar_url {
	url: string
}

export interface ShowChannelQuery_showChannel_messages_author {
	id: string
	username: string
	avatar_url: ShowChannelQuery_showChannel_messages_author_avatar_url
}

export interface ShowChannelQuery_showChannel_messages {
	id: string
	parentId: string
	body: string
	author: ShowChannelQuery_showChannel_messages_author
	createdAt: any
	updatedAt: any
}

export interface ShowChannelQuery_showChannel {
	id: string
	name: string
	slug: string
	members: ShowChannelQuery_showChannel_members[] | null
	messages: ShowChannelQuery_showChannel_messages[] | null
}

export interface ShowChannelQuery {
	showChannel: ShowChannelQuery_showChannel
}

export interface ShowChannelQueryVariables {
	channelId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateChannelMutation
// ====================================================

export interface CreateChannelMutation_createChannel_messages_author_avatar_url {
	url: string
}

export interface CreateChannelMutation_createChannel_messages_author {
	id: string
	username: string
	avatar_url: CreateChannelMutation_createChannel_messages_author_avatar_url
}

export interface CreateChannelMutation_createChannel_messages {
	id: string
	parentId: string
	body: string
	author: CreateChannelMutation_createChannel_messages_author
	createdAt: any
	updatedAt: any
}

export interface CreateChannelMutation_createChannel {
	id: string
	name: string
	slug: string
	messages: CreateChannelMutation_createChannel_messages[] | null
}

export interface CreateChannelMutation {
	createChannel: CreateChannelMutation_createChannel
}

export interface CreateChannelMutationVariables {
	name: string
	teamId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMessageMutation
// ====================================================

export interface CreateMessageMutation_createMessage_author_avatar_url {
	url: string
}

export interface CreateMessageMutation_createMessage_author {
	id: string
	username: string
	avatar_url: CreateMessageMutation_createMessage_author_avatar_url
}

export interface CreateMessageMutation_createMessage {
	id: string
	parentId: string
	body: string
	author: CreateMessageMutation_createMessage_author
	createdAt: any
	updatedAt: any
}

export interface CreateMessageMutation {
	createMessage: CreateMessageMutation_createMessage
}

export interface CreateMessageMutationVariables {
	body: string
	channelId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddChannelMemberMutation
// ====================================================

export interface AddChannelMemberMutation_addChannelMember_author {
	id: string
	username: string
}

export interface AddChannelMemberMutation_addChannelMember_moderators {
	id: string
	username: string
}

export interface AddChannelMemberMutation_addChannelMember_members {
	id: string
	username: string
}

export interface AddChannelMemberMutation_addChannelMember {
	id: string
	name: string
	author: AddChannelMemberMutation_addChannelMember_author
	moderators: AddChannelMemberMutation_addChannelMember_moderators[] | null
	members: AddChannelMemberMutation_addChannelMember_members[] | null
}

export interface AddChannelMemberMutation {
	addChannelMember: AddChannelMemberMutation_addChannelMember
}

export interface AddChannelMemberMutationVariables {
	userId: string
	channelId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddTeamMemberMutation
// ====================================================

export interface AddTeamMemberMutation_addTeamMember_members {
	id: string
	username: string
}

export interface AddTeamMemberMutation_addTeamMember {
	id: string
	name: string
	members: AddTeamMemberMutation_addTeamMember_members[] | null
}

export interface AddTeamMemberMutation {
	addTeamMember: AddTeamMemberMutation_addTeamMember
}

export interface AddTeamMemberMutationVariables {
	userId: string
	teamId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CommentMutation
// ====================================================

export interface CommentMutation_createComment_repliedTo {
	id: string
	username: string
}

export interface CommentMutation_createComment_ratings_author {
	id: string
	username: string
}

export interface CommentMutation_createComment_ratings {
	vote: number
	id: string
	author: CommentMutation_createComment_ratings_author[] | null
}

export interface CommentMutation_createComment_replies_ratings_author {
	id: string
	username: string
}

export interface CommentMutation_createComment_replies_ratings {
	vote: number
	id: string
	author: CommentMutation_createComment_replies_ratings_author[] | null
}

export interface CommentMutation_createComment_replies_repliedTo {
	id: string
	username: string
}

export interface CommentMutation_createComment_replies_author {
	id: string
	username: string
}

export interface CommentMutation_createComment_replies {
	id: string
	parentId: string
	ratings: CommentMutation_createComment_replies_ratings
	body: string
	pageId: string
	repliedTo: CommentMutation_createComment_replies_repliedTo | null
	createdAt: any
	updatedAt: any
	author: CommentMutation_createComment_replies_author
}

export interface CommentMutation_createComment_author_avatar_url {
	url: string
}

export interface CommentMutation_createComment_author {
	id: string
	username: string
	avatar_url: CommentMutation_createComment_author_avatar_url
}

export interface CommentMutation_createComment {
	id: string
	parentId: string
	body: string
	repliedTo: CommentMutation_createComment_repliedTo | null
	createdAt: any
	pageId: string
	updatedAt: any
	ratings: CommentMutation_createComment_ratings
	replies: CommentMutation_createComment_replies[] | null
	author: CommentMutation_createComment_author
}

export interface CommentMutation {
	createComment: CommentMutation_createComment
}

export interface CommentMutationVariables {
	body: string
	pageId: string
	parentId: string
	repliedTo?: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryComment
// ====================================================

export interface QueryComment_queryComment_repliedTo {
	id: string
	username: string
}

export interface QueryComment_queryComment_ratings_author {
	id: string
	username: string
}

export interface QueryComment_queryComment_ratings {
	vote: number
	id: string
	author: QueryComment_queryComment_ratings_author[] | null
}

export interface QueryComment_queryComment_replies_ratings_author {
	id: string
	username: string
}

export interface QueryComment_queryComment_replies_ratings {
	vote: number
	id: string
	author: QueryComment_queryComment_replies_ratings_author[] | null
}

export interface QueryComment_queryComment_replies_repliedTo {
	id: string
	username: string
}

export interface QueryComment_queryComment_replies_author {
	id: string
	username: string
}

export interface QueryComment_queryComment_replies {
	id: string
	parentId: string
	ratings: QueryComment_queryComment_replies_ratings
	body: string
	pageId: string
	repliedTo: QueryComment_queryComment_replies_repliedTo | null
	createdAt: any
	updatedAt: any
	author: QueryComment_queryComment_replies_author
}

export interface QueryComment_queryComment_author_avatar_url {
	url: string
}

export interface QueryComment_queryComment_author {
	id: string
	username: string
	avatar_url: QueryComment_queryComment_author_avatar_url
}

export interface QueryComment_queryComment {
	id: string
	parentId: string
	body: string
	repliedTo: QueryComment_queryComment_repliedTo | null
	createdAt: any
	pageId: string
	updatedAt: any
	ratings: QueryComment_queryComment_ratings
	replies: QueryComment_queryComment_replies[] | null
	author: QueryComment_queryComment_author
}

export interface QueryComment {
	queryComment: QueryComment_queryComment[] | null
}

export interface QueryCommentVariables {
	parentId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateReply
// ====================================================

export interface CreateReply_createReply_repliedTo {
	id: string
	username: string
}

export interface CreateReply_createReply_ratings_author {
	id: string
	username: string
}

export interface CreateReply_createReply_ratings {
	vote: number
	id: string
	author: CreateReply_createReply_ratings_author[] | null
}

export interface CreateReply_createReply_replies_ratings_author {
	id: string
	username: string
}

export interface CreateReply_createReply_replies_ratings {
	vote: number
	id: string
	author: CreateReply_createReply_replies_ratings_author[] | null
}

export interface CreateReply_createReply_replies_repliedTo {
	id: string
	username: string
}

export interface CreateReply_createReply_replies_author {
	id: string
	username: string
}

export interface CreateReply_createReply_replies {
	id: string
	parentId: string
	ratings: CreateReply_createReply_replies_ratings
	body: string
	pageId: string
	repliedTo: CreateReply_createReply_replies_repliedTo | null
	createdAt: any
	updatedAt: any
	author: CreateReply_createReply_replies_author
}

export interface CreateReply_createReply_author_avatar_url {
	url: string
}

export interface CreateReply_createReply_author {
	id: string
	username: string
	avatar_url: CreateReply_createReply_author_avatar_url
}

export interface CreateReply_createReply {
	id: string
	parentId: string
	body: string
	repliedTo: CreateReply_createReply_repliedTo | null
	createdAt: any
	pageId: string
	updatedAt: any
	ratings: CreateReply_createReply_ratings
	replies: CreateReply_createReply_replies[] | null
	author: CreateReply_createReply_author
}

export interface CreateReply {
	createReply: CreateReply_createReply
}

export interface CreateReplyVariables {
	body: string
	pageId: string
	parentId: string
	repliedTo?: string | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikeComment
// ====================================================

export interface LikeComment_likeComment_repliedTo {
	id: string
	username: string
}

export interface LikeComment_likeComment_ratings_author {
	id: string
	username: string
}

export interface LikeComment_likeComment_ratings {
	vote: number
	id: string
	author: LikeComment_likeComment_ratings_author[] | null
}

export interface LikeComment_likeComment_replies_ratings_author {
	id: string
	username: string
}

export interface LikeComment_likeComment_replies_ratings {
	vote: number
	id: string
	author: LikeComment_likeComment_replies_ratings_author[] | null
}

export interface LikeComment_likeComment_replies_repliedTo {
	id: string
	username: string
}

export interface LikeComment_likeComment_replies_author {
	id: string
	username: string
}

export interface LikeComment_likeComment_replies {
	id: string
	parentId: string
	ratings: LikeComment_likeComment_replies_ratings
	body: string
	pageId: string
	repliedTo: LikeComment_likeComment_replies_repliedTo | null
	createdAt: any
	updatedAt: any
	author: LikeComment_likeComment_replies_author
}

export interface LikeComment_likeComment_author_avatar_url {
	url: string
}

export interface LikeComment_likeComment_author {
	id: string
	username: string
	avatar_url: LikeComment_likeComment_author_avatar_url
}

export interface LikeComment_likeComment {
	id: string
	parentId: string
	body: string
	repliedTo: LikeComment_likeComment_repliedTo | null
	createdAt: any
	pageId: string
	updatedAt: any
	ratings: LikeComment_likeComment_ratings
	replies: LikeComment_likeComment_replies[] | null
	author: LikeComment_likeComment_author
}

export interface LikeComment {
	likeComment: LikeComment_likeComment | null
}

export interface LikeCommentVariables {
	commentId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditComment
// ====================================================

export interface EditComment_editComment_repliedTo {
	id: string
	username: string
}

export interface EditComment_editComment_ratings_author {
	id: string
	username: string
}

export interface EditComment_editComment_ratings {
	vote: number
	id: string
	author: EditComment_editComment_ratings_author[] | null
}

export interface EditComment_editComment_replies_ratings_author {
	id: string
	username: string
}

export interface EditComment_editComment_replies_ratings {
	vote: number
	id: string
	author: EditComment_editComment_replies_ratings_author[] | null
}

export interface EditComment_editComment_replies_repliedTo {
	id: string
	username: string
}

export interface EditComment_editComment_replies_author {
	id: string
	username: string
}

export interface EditComment_editComment_replies {
	id: string
	parentId: string
	ratings: EditComment_editComment_replies_ratings
	body: string
	pageId: string
	repliedTo: EditComment_editComment_replies_repliedTo | null
	createdAt: any
	updatedAt: any
	author: EditComment_editComment_replies_author
}

export interface EditComment_editComment_author_avatar_url {
	url: string
}

export interface EditComment_editComment_author {
	id: string
	username: string
	avatar_url: EditComment_editComment_author_avatar_url
}

export interface EditComment_editComment {
	id: string
	parentId: string
	body: string
	repliedTo: EditComment_editComment_repliedTo | null
	createdAt: any
	pageId: string
	updatedAt: any
	ratings: EditComment_editComment_ratings
	replies: EditComment_editComment_replies[] | null
	author: EditComment_editComment_author
}

export interface EditComment {
	editComment: EditComment_editComment
}

export interface EditCommentVariables {
	id: string
	body: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteComment
// ====================================================

export interface DeleteComment_deleteComment_repliedTo {
	id: string
	username: string
}

export interface DeleteComment_deleteComment_ratings_author {
	id: string
	username: string
}

export interface DeleteComment_deleteComment_ratings {
	vote: number
	id: string
	author: DeleteComment_deleteComment_ratings_author[] | null
}

export interface DeleteComment_deleteComment_replies_ratings_author {
	id: string
	username: string
}

export interface DeleteComment_deleteComment_replies_ratings {
	vote: number
	id: string
	author: DeleteComment_deleteComment_replies_ratings_author[] | null
}

export interface DeleteComment_deleteComment_replies_repliedTo {
	id: string
	username: string
}

export interface DeleteComment_deleteComment_replies_author {
	id: string
	username: string
}

export interface DeleteComment_deleteComment_replies {
	id: string
	parentId: string
	ratings: DeleteComment_deleteComment_replies_ratings
	body: string
	pageId: string
	repliedTo: DeleteComment_deleteComment_replies_repliedTo | null
	createdAt: any
	updatedAt: any
	author: DeleteComment_deleteComment_replies_author
}

export interface DeleteComment_deleteComment_author_avatar_url {
	url: string
}

export interface DeleteComment_deleteComment_author {
	id: string
	username: string
	avatar_url: DeleteComment_deleteComment_author_avatar_url
}

export interface DeleteComment_deleteComment {
	id: string
	parentId: string
	body: string
	repliedTo: DeleteComment_deleteComment_repliedTo | null
	createdAt: any
	pageId: string
	updatedAt: any
	ratings: DeleteComment_deleteComment_ratings
	replies: DeleteComment_deleteComment_replies[] | null
	author: DeleteComment_deleteComment_author
}

export interface DeleteComment {
	deleteComment: DeleteComment_deleteComment
}

export interface DeleteCommentVariables {
	id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfileQuery
// ====================================================

export interface GetProfileQuery_getProfile_friends_avatar_url {
	url: string
}

export interface GetProfileQuery_getProfile_friends {
	id: string
	username: string
	avatar_url: GetProfileQuery_getProfile_friends_avatar_url
}

export interface GetProfileQuery_getProfile_avatar_url {
	url: string
}

export interface GetProfileQuery_getProfile_friend_requests_avatar_url {
	url: string
}

export interface GetProfileQuery_getProfile_friend_requests {
	id: string
	username: string
	avatar_url: GetProfileQuery_getProfile_friend_requests_avatar_url
}

export interface GetProfileQuery_getProfile {
	id: string
	username: string
	createdAt: any
	updatedAt: any
	friends: GetProfileQuery_getProfile_friends[] | null
	avatar_url: GetProfileQuery_getProfile_avatar_url
	friend_requests: GetProfileQuery_getProfile_friend_requests[] | null
}

export interface GetProfileQuery {
	getProfile: GetProfileQuery_getProfile
}

export interface GetProfileQueryVariables {
	username: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: FriendRequestMutation
// ====================================================

export interface FriendRequestMutation_friendRequest_errors {
	path: string
	message: string
}

export interface FriendRequestMutation_friendRequest {
	ok: boolean
	errors: FriendRequestMutation_friendRequest_errors[] | null
}

export interface FriendRequestMutation {
	friendRequest: FriendRequestMutation_friendRequest
}

export interface FriendRequestMutationVariables {
	requestedId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addFriendMutation
// ====================================================

export interface addFriendMutation_addFriend_errors {
	path: string
	message: string
}

export interface addFriendMutation_addFriend {
	ok: boolean
	errors: addFriendMutation_addFriend_errors[] | null
}

export interface addFriendMutation {
	addFriend: addFriendMutation_addFriend
}

export interface addFriendMutationVariables {
	requestedId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RejectFriendMutation
// ====================================================

export interface RejectFriendMutation_friendReject_errors {
	path: string
	message: string
}

export interface RejectFriendMutation_friendReject {
	ok: boolean
	errors: RejectFriendMutation_friendReject_errors[] | null
}

export interface RejectFriendMutation {
	friendReject: RejectFriendMutation_friendReject
}

export interface RejectFriendMutationVariables {
	id: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTeamMutation
// ====================================================

export interface CreateTeamMutation_createTeam_channels {
	slug: string
}

export interface CreateTeamMutation_createTeam {
	name: string
	id: string
	slug: string
	channels: CreateTeamMutation_createTeam_channels[] | null
}

export interface CreateTeamMutation {
	createTeam: CreateTeamMutation_createTeam
}

export interface CreateTeamMutationVariables {
	name: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryUsers
// ====================================================

export interface QueryUsers_queryUsers {
	username: string
	id: string
}

export interface QueryUsers {
	queryUsers: QueryUsers_queryUsers[] | null
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ShowTeamsQuery
// ====================================================

export interface ShowTeamsQuery_showTeams_channels {
	slug: string
}

export interface ShowTeamsQuery_showTeams {
	id: string
	slug: string
	name: string
	channels: ShowTeamsQuery_showTeams_channels[] | null
}

export interface ShowTeamsQuery {
	showTeams: ShowTeamsQuery_showTeams[] | null
}

export interface ShowTeamsQueryVariables {
	authorId: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentFragment
// ====================================================

export interface CommentFragment_repliedTo {
	id: string
	username: string
}

export interface CommentFragment_ratings_author {
	id: string
	username: string
}

export interface CommentFragment_ratings {
	vote: number
	id: string
	author: CommentFragment_ratings_author[] | null
}

export interface CommentFragment_replies_ratings_author {
	id: string
	username: string
}

export interface CommentFragment_replies_ratings {
	vote: number
	id: string
	author: CommentFragment_replies_ratings_author[] | null
}

export interface CommentFragment_replies_repliedTo {
	id: string
	username: string
}

export interface CommentFragment_replies_author {
	id: string
	username: string
}

export interface CommentFragment_replies {
	id: string
	parentId: string
	ratings: CommentFragment_replies_ratings
	body: string
	pageId: string
	repliedTo: CommentFragment_replies_repliedTo | null
	createdAt: any
	updatedAt: any
	author: CommentFragment_replies_author
}

export interface CommentFragment_author_avatar_url {
	url: string
}

export interface CommentFragment_author {
	id: string
	username: string
	avatar_url: CommentFragment_author_avatar_url
}

export interface CommentFragment {
	id: string
	parentId: string
	body: string
	repliedTo: CommentFragment_repliedTo | null
	createdAt: any
	pageId: string
	updatedAt: any
	ratings: CommentFragment_ratings
	replies: CommentFragment_replies[] | null
	author: CommentFragment_author
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FriendFragment
// ====================================================

export interface FriendFragment_avatar_url {
	url: string
}

export interface FriendFragment {
	id: string
	username: string
	avatar_url: FriendFragment_avatar_url
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
