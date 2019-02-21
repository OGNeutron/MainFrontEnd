export type Maybe<T> = T | null

export interface NotificationWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	message?: Maybe<string>

	message_not?: Maybe<string>

	message_in?: Maybe<string[]>

	message_not_in?: Maybe<string[]>

	message_lt?: Maybe<string>

	message_lte?: Maybe<string>

	message_gt?: Maybe<string>

	message_gte?: Maybe<string>

	message_contains?: Maybe<string>

	message_not_contains?: Maybe<string>

	message_starts_with?: Maybe<string>

	message_not_starts_with?: Maybe<string>

	message_ends_with?: Maybe<string>

	message_not_ends_with?: Maybe<string>

	comments?: Maybe<CommentWhereInput>

	messages?: Maybe<MessageWhereInput>

	team?: Maybe<TeamWhereInput>

	channel?: Maybe<ChannelWhereInput>

	friend_requests?: Maybe<UserWhereInput>

	friend?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	AND?: Maybe<NotificationWhereInput[]>

	OR?: Maybe<NotificationWhereInput[]>

	NOT?: Maybe<NotificationWhereInput[]>
}

export interface CommentWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	body?: Maybe<string>

	body_not?: Maybe<string>

	body_in?: Maybe<string[]>

	body_not_in?: Maybe<string[]>

	body_lt?: Maybe<string>

	body_lte?: Maybe<string>

	body_gt?: Maybe<string>

	body_gte?: Maybe<string>

	body_contains?: Maybe<string>

	body_not_contains?: Maybe<string>

	body_starts_with?: Maybe<string>

	body_not_starts_with?: Maybe<string>

	body_ends_with?: Maybe<string>

	body_not_ends_with?: Maybe<string>

	parentId?: Maybe<string>

	parentId_not?: Maybe<string>

	parentId_in?: Maybe<string[]>

	parentId_not_in?: Maybe<string[]>

	parentId_lt?: Maybe<string>

	parentId_lte?: Maybe<string>

	parentId_gt?: Maybe<string>

	parentId_gte?: Maybe<string>

	parentId_contains?: Maybe<string>

	parentId_not_contains?: Maybe<string>

	parentId_starts_with?: Maybe<string>

	parentId_not_starts_with?: Maybe<string>

	parentId_ends_with?: Maybe<string>

	parentId_not_ends_with?: Maybe<string>

	pageId?: Maybe<string>

	pageId_not?: Maybe<string>

	pageId_in?: Maybe<string[]>

	pageId_not_in?: Maybe<string[]>

	pageId_lt?: Maybe<string>

	pageId_lte?: Maybe<string>

	pageId_gt?: Maybe<string>

	pageId_gte?: Maybe<string>

	pageId_contains?: Maybe<string>

	pageId_not_contains?: Maybe<string>

	pageId_starts_with?: Maybe<string>

	pageId_not_starts_with?: Maybe<string>

	pageId_ends_with?: Maybe<string>

	pageId_not_ends_with?: Maybe<string>

	repliedTo?: Maybe<UserWhereInput>

	ratings?: Maybe<RatingWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	replies_every?: Maybe<CommentWhereInput>

	replies_some?: Maybe<CommentWhereInput>

	replies_none?: Maybe<CommentWhereInput>

	author?: Maybe<UserWhereInput>

	AND?: Maybe<CommentWhereInput[]>

	OR?: Maybe<CommentWhereInput[]>

	NOT?: Maybe<CommentWhereInput[]>
}

export interface UserWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	email?: Maybe<string>

	email_not?: Maybe<string>

	email_in?: Maybe<string[]>

	email_not_in?: Maybe<string[]>

	email_lt?: Maybe<string>

	email_lte?: Maybe<string>

	email_gt?: Maybe<string>

	email_gte?: Maybe<string>

	email_contains?: Maybe<string>

	email_not_contains?: Maybe<string>

	email_starts_with?: Maybe<string>

	email_not_starts_with?: Maybe<string>

	email_ends_with?: Maybe<string>

	email_not_ends_with?: Maybe<string>

	notifications_every?: Maybe<NotificationWhereInput>

	notifications_some?: Maybe<NotificationWhereInput>

	notifications_none?: Maybe<NotificationWhereInput>

	set_private?: Maybe<boolean>

	set_private_not?: Maybe<boolean>

	username?: Maybe<string>

	username_not?: Maybe<string>

	username_in?: Maybe<string[]>

	username_not_in?: Maybe<string[]>

	username_lt?: Maybe<string>

	username_lte?: Maybe<string>

	username_gt?: Maybe<string>

	username_gte?: Maybe<string>

	username_contains?: Maybe<string>

	username_not_contains?: Maybe<string>

	username_starts_with?: Maybe<string>

	username_not_starts_with?: Maybe<string>

	username_ends_with?: Maybe<string>

	username_not_ends_with?: Maybe<string>

	password?: Maybe<string>

	password_not?: Maybe<string>

	password_in?: Maybe<string[]>

	password_not_in?: Maybe<string[]>

	password_lt?: Maybe<string>

	password_lte?: Maybe<string>

	password_gt?: Maybe<string>

	password_gte?: Maybe<string>

	password_contains?: Maybe<string>

	password_not_contains?: Maybe<string>

	password_starts_with?: Maybe<string>

	password_not_starts_with?: Maybe<string>

	password_ends_with?: Maybe<string>

	password_not_ends_with?: Maybe<string>

	gitHubId?: Maybe<string>

	gitHubId_not?: Maybe<string>

	gitHubId_in?: Maybe<string[]>

	gitHubId_not_in?: Maybe<string[]>

	gitHubId_lt?: Maybe<string>

	gitHubId_lte?: Maybe<string>

	gitHubId_gt?: Maybe<string>

	gitHubId_gte?: Maybe<string>

	gitHubId_contains?: Maybe<string>

	gitHubId_not_contains?: Maybe<string>

	gitHubId_starts_with?: Maybe<string>

	gitHubId_not_starts_with?: Maybe<string>

	gitHubId_ends_with?: Maybe<string>

	gitHubId_not_ends_with?: Maybe<string>

	facebookId?: Maybe<string>

	facebookId_not?: Maybe<string>

	facebookId_in?: Maybe<string[]>

	facebookId_not_in?: Maybe<string[]>

	facebookId_lt?: Maybe<string>

	facebookId_lte?: Maybe<string>

	facebookId_gt?: Maybe<string>

	facebookId_gte?: Maybe<string>

	facebookId_contains?: Maybe<string>

	facebookId_not_contains?: Maybe<string>

	facebookId_starts_with?: Maybe<string>

	facebookId_not_starts_with?: Maybe<string>

	facebookId_ends_with?: Maybe<string>

	facebookId_not_ends_with?: Maybe<string>

	twitterId?: Maybe<string>

	twitterId_not?: Maybe<string>

	twitterId_in?: Maybe<string[]>

	twitterId_not_in?: Maybe<string[]>

	twitterId_lt?: Maybe<string>

	twitterId_lte?: Maybe<string>

	twitterId_gt?: Maybe<string>

	twitterId_gte?: Maybe<string>

	twitterId_contains?: Maybe<string>

	twitterId_not_contains?: Maybe<string>

	twitterId_starts_with?: Maybe<string>

	twitterId_not_starts_with?: Maybe<string>

	twitterId_ends_with?: Maybe<string>

	twitterId_not_ends_with?: Maybe<string>

	gmailId?: Maybe<string>

	gmailId_not?: Maybe<string>

	gmailId_in?: Maybe<string[]>

	gmailId_not_in?: Maybe<string[]>

	gmailId_lt?: Maybe<string>

	gmailId_lte?: Maybe<string>

	gmailId_gt?: Maybe<string>

	gmailId_gte?: Maybe<string>

	gmailId_contains?: Maybe<string>

	gmailId_not_contains?: Maybe<string>

	gmailId_starts_with?: Maybe<string>

	gmailId_not_starts_with?: Maybe<string>

	gmailId_ends_with?: Maybe<string>

	gmailId_not_ends_with?: Maybe<string>

	directMessages_every?: Maybe<CommentWhereInput>

	directMessages_some?: Maybe<CommentWhereInput>

	directMessages_none?: Maybe<CommentWhereInput>

	avatar_url?: Maybe<FileWhereInput>

	private?: Maybe<boolean>

	private_not?: Maybe<boolean>

	blockedUsers_every?: Maybe<UserWhereInput>

	blockedUsers_some?: Maybe<UserWhereInput>

	blockedUsers_none?: Maybe<UserWhereInput>

	confirmed?: Maybe<boolean>

	confirmed_not?: Maybe<boolean>

	online?: Maybe<boolean>

	online_not?: Maybe<boolean>

	friends_every?: Maybe<UserWhereInput>

	friends_some?: Maybe<UserWhereInput>

	friends_none?: Maybe<UserWhereInput>

	friend_requests_every?: Maybe<UserWhereInput>

	friend_requests_some?: Maybe<UserWhereInput>

	friend_requests_none?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	role?: Maybe<UserRole>

	role_not?: Maybe<UserRole>

	role_in?: Maybe<UserRole[]>

	role_not_in?: Maybe<UserRole[]>

	teams_every?: Maybe<TeamWhereInput>

	teams_some?: Maybe<TeamWhereInput>

	teams_none?: Maybe<TeamWhereInput>

	channels_every?: Maybe<ChannelWhereInput>

	channels_some?: Maybe<ChannelWhereInput>

	channels_none?: Maybe<ChannelWhereInput>

	owned_teams_every?: Maybe<TeamWhereInput>

	owned_teams_some?: Maybe<TeamWhereInput>

	owned_teams_none?: Maybe<TeamWhereInput>

	owned_channels_every?: Maybe<ChannelWhereInput>

	owned_channels_some?: Maybe<ChannelWhereInput>

	owned_channels_none?: Maybe<ChannelWhereInput>

	AND?: Maybe<UserWhereInput[]>

	OR?: Maybe<UserWhereInput[]>

	NOT?: Maybe<UserWhereInput[]>
}

export interface FileWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	filename?: Maybe<string>

	filename_not?: Maybe<string>

	filename_in?: Maybe<string[]>

	filename_not_in?: Maybe<string[]>

	filename_lt?: Maybe<string>

	filename_lte?: Maybe<string>

	filename_gt?: Maybe<string>

	filename_gte?: Maybe<string>

	filename_contains?: Maybe<string>

	filename_not_contains?: Maybe<string>

	filename_starts_with?: Maybe<string>

	filename_not_starts_with?: Maybe<string>

	filename_ends_with?: Maybe<string>

	filename_not_ends_with?: Maybe<string>

	mimetype?: Maybe<string>

	mimetype_not?: Maybe<string>

	mimetype_in?: Maybe<string[]>

	mimetype_not_in?: Maybe<string[]>

	mimetype_lt?: Maybe<string>

	mimetype_lte?: Maybe<string>

	mimetype_gt?: Maybe<string>

	mimetype_gte?: Maybe<string>

	mimetype_contains?: Maybe<string>

	mimetype_not_contains?: Maybe<string>

	mimetype_starts_with?: Maybe<string>

	mimetype_not_starts_with?: Maybe<string>

	mimetype_ends_with?: Maybe<string>

	mimetype_not_ends_with?: Maybe<string>

	encoding?: Maybe<string>

	encoding_not?: Maybe<string>

	encoding_in?: Maybe<string[]>

	encoding_not_in?: Maybe<string[]>

	encoding_lt?: Maybe<string>

	encoding_lte?: Maybe<string>

	encoding_gt?: Maybe<string>

	encoding_gte?: Maybe<string>

	encoding_contains?: Maybe<string>

	encoding_not_contains?: Maybe<string>

	encoding_starts_with?: Maybe<string>

	encoding_not_starts_with?: Maybe<string>

	encoding_ends_with?: Maybe<string>

	encoding_not_ends_with?: Maybe<string>

	key?: Maybe<string>

	key_not?: Maybe<string>

	key_in?: Maybe<string[]>

	key_not_in?: Maybe<string[]>

	key_lt?: Maybe<string>

	key_lte?: Maybe<string>

	key_gt?: Maybe<string>

	key_gte?: Maybe<string>

	key_contains?: Maybe<string>

	key_not_contains?: Maybe<string>

	key_starts_with?: Maybe<string>

	key_not_starts_with?: Maybe<string>

	key_ends_with?: Maybe<string>

	key_not_ends_with?: Maybe<string>

	ETag?: Maybe<string>

	ETag_not?: Maybe<string>

	ETag_in?: Maybe<string[]>

	ETag_not_in?: Maybe<string[]>

	ETag_lt?: Maybe<string>

	ETag_lte?: Maybe<string>

	ETag_gt?: Maybe<string>

	ETag_gte?: Maybe<string>

	ETag_contains?: Maybe<string>

	ETag_not_contains?: Maybe<string>

	ETag_starts_with?: Maybe<string>

	ETag_not_starts_with?: Maybe<string>

	ETag_ends_with?: Maybe<string>

	ETag_not_ends_with?: Maybe<string>

	url?: Maybe<string>

	url_not?: Maybe<string>

	url_in?: Maybe<string[]>

	url_not_in?: Maybe<string[]>

	url_lt?: Maybe<string>

	url_lte?: Maybe<string>

	url_gt?: Maybe<string>

	url_gte?: Maybe<string>

	url_contains?: Maybe<string>

	url_not_contains?: Maybe<string>

	url_starts_with?: Maybe<string>

	url_not_starts_with?: Maybe<string>

	url_ends_with?: Maybe<string>

	url_not_ends_with?: Maybe<string>

	AND?: Maybe<FileWhereInput[]>

	OR?: Maybe<FileWhereInput[]>

	NOT?: Maybe<FileWhereInput[]>
}

export interface TeamWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	slug?: Maybe<string>

	slug_not?: Maybe<string>

	slug_in?: Maybe<string[]>

	slug_not_in?: Maybe<string[]>

	slug_lt?: Maybe<string>

	slug_lte?: Maybe<string>

	slug_gt?: Maybe<string>

	slug_gte?: Maybe<string>

	slug_contains?: Maybe<string>

	slug_not_contains?: Maybe<string>

	slug_starts_with?: Maybe<string>

	slug_not_starts_with?: Maybe<string>

	slug_ends_with?: Maybe<string>

	slug_not_ends_with?: Maybe<string>

	moderators_every?: Maybe<UserWhereInput>

	moderators_some?: Maybe<UserWhereInput>

	moderators_none?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	members_every?: Maybe<UserWhereInput>

	members_some?: Maybe<UserWhereInput>

	members_none?: Maybe<UserWhereInput>

	channels_every?: Maybe<ChannelWhereInput>

	channels_some?: Maybe<ChannelWhereInput>

	channels_none?: Maybe<ChannelWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	confirmed?: Maybe<boolean>

	confirmed_not?: Maybe<boolean>

	online?: Maybe<boolean>

	online_not?: Maybe<boolean>

	AND?: Maybe<TeamWhereInput[]>

	OR?: Maybe<TeamWhereInput[]>

	NOT?: Maybe<TeamWhereInput[]>
}

export interface ChannelWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	slug?: Maybe<string>

	slug_not?: Maybe<string>

	slug_in?: Maybe<string[]>

	slug_not_in?: Maybe<string[]>

	slug_lt?: Maybe<string>

	slug_lte?: Maybe<string>

	slug_gt?: Maybe<string>

	slug_gte?: Maybe<string>

	slug_contains?: Maybe<string>

	slug_not_contains?: Maybe<string>

	slug_starts_with?: Maybe<string>

	slug_not_starts_with?: Maybe<string>

	slug_ends_with?: Maybe<string>

	slug_not_ends_with?: Maybe<string>

	moderators_every?: Maybe<UserWhereInput>

	moderators_some?: Maybe<UserWhereInput>

	moderators_none?: Maybe<UserWhereInput>

	public?: Maybe<boolean>

	public_not?: Maybe<boolean>

	messages_every?: Maybe<MessageWhereInput>

	messages_some?: Maybe<MessageWhereInput>

	messages_none?: Maybe<MessageWhereInput>

	teamId?: Maybe<string>

	teamId_not?: Maybe<string>

	teamId_in?: Maybe<string[]>

	teamId_not_in?: Maybe<string[]>

	teamId_lt?: Maybe<string>

	teamId_lte?: Maybe<string>

	teamId_gt?: Maybe<string>

	teamId_gte?: Maybe<string>

	teamId_contains?: Maybe<string>

	teamId_not_contains?: Maybe<string>

	teamId_starts_with?: Maybe<string>

	teamId_not_starts_with?: Maybe<string>

	teamId_ends_with?: Maybe<string>

	teamId_not_ends_with?: Maybe<string>

	members_every?: Maybe<UserWhereInput>

	members_some?: Maybe<UserWhereInput>

	members_none?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<ChannelWhereInput[]>

	OR?: Maybe<ChannelWhereInput[]>

	NOT?: Maybe<ChannelWhereInput[]>
}

export interface MessageWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	body?: Maybe<string>

	body_not?: Maybe<string>

	body_in?: Maybe<string[]>

	body_not_in?: Maybe<string[]>

	body_lt?: Maybe<string>

	body_lte?: Maybe<string>

	body_gt?: Maybe<string>

	body_gte?: Maybe<string>

	body_contains?: Maybe<string>

	body_not_contains?: Maybe<string>

	body_starts_with?: Maybe<string>

	body_not_starts_with?: Maybe<string>

	body_ends_with?: Maybe<string>

	body_not_ends_with?: Maybe<string>

	parentId?: Maybe<string>

	parentId_not?: Maybe<string>

	parentId_in?: Maybe<string[]>

	parentId_not_in?: Maybe<string[]>

	parentId_lt?: Maybe<string>

	parentId_lte?: Maybe<string>

	parentId_gt?: Maybe<string>

	parentId_gte?: Maybe<string>

	parentId_contains?: Maybe<string>

	parentId_not_contains?: Maybe<string>

	parentId_starts_with?: Maybe<string>

	parentId_not_starts_with?: Maybe<string>

	parentId_ends_with?: Maybe<string>

	parentId_not_ends_with?: Maybe<string>

	url?: Maybe<string>

	url_not?: Maybe<string>

	url_in?: Maybe<string[]>

	url_not_in?: Maybe<string[]>

	url_lt?: Maybe<string>

	url_lte?: Maybe<string>

	url_gt?: Maybe<string>

	url_gte?: Maybe<string>

	url_contains?: Maybe<string>

	url_not_contains?: Maybe<string>

	url_starts_with?: Maybe<string>

	url_not_starts_with?: Maybe<string>

	url_ends_with?: Maybe<string>

	url_not_ends_with?: Maybe<string>

	filetype?: Maybe<string>

	filetype_not?: Maybe<string>

	filetype_in?: Maybe<string[]>

	filetype_not_in?: Maybe<string[]>

	filetype_lt?: Maybe<string>

	filetype_lte?: Maybe<string>

	filetype_gt?: Maybe<string>

	filetype_gte?: Maybe<string>

	filetype_contains?: Maybe<string>

	filetype_not_contains?: Maybe<string>

	filetype_starts_with?: Maybe<string>

	filetype_not_starts_with?: Maybe<string>

	filetype_ends_with?: Maybe<string>

	filetype_not_ends_with?: Maybe<string>

	author?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<MessageWhereInput[]>

	OR?: Maybe<MessageWhereInput[]>

	NOT?: Maybe<MessageWhereInput[]>
}

export interface RatingWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	vote?: Maybe<number>

	vote_not?: Maybe<number>

	vote_in?: Maybe<number[]>

	vote_not_in?: Maybe<number[]>

	vote_lt?: Maybe<number>

	vote_lte?: Maybe<number>

	vote_gt?: Maybe<number>

	vote_gte?: Maybe<number>

	author_every?: Maybe<UserWhereInput>

	author_some?: Maybe<UserWhereInput>

	author_none?: Maybe<UserWhereInput>

	AND?: Maybe<RatingWhereInput[]>

	OR?: Maybe<RatingWhereInput[]>

	NOT?: Maybe<RatingWhereInput[]>
}

export interface TodoWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	body?: Maybe<string>

	body_not?: Maybe<string>

	body_in?: Maybe<string[]>

	body_not_in?: Maybe<string[]>

	body_lt?: Maybe<string>

	body_lte?: Maybe<string>

	body_gt?: Maybe<string>

	body_gte?: Maybe<string>

	body_contains?: Maybe<string>

	body_not_contains?: Maybe<string>

	body_starts_with?: Maybe<string>

	body_not_starts_with?: Maybe<string>

	body_ends_with?: Maybe<string>

	body_not_ends_with?: Maybe<string>

	author?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<TodoWhereInput[]>

	OR?: Maybe<TodoWhereInput[]>

	NOT?: Maybe<TodoWhereInput[]>
}

export interface ProductWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	stock?: Maybe<number>

	stock_not?: Maybe<number>

	stock_in?: Maybe<number[]>

	stock_not_in?: Maybe<number[]>

	stock_lt?: Maybe<number>

	stock_lte?: Maybe<number>

	stock_gt?: Maybe<number>

	stock_gte?: Maybe<number>

	price?: Maybe<number>

	price_not?: Maybe<number>

	price_in?: Maybe<number[]>

	price_not_in?: Maybe<number[]>

	price_lt?: Maybe<number>

	price_lte?: Maybe<number>

	price_gt?: Maybe<number>

	price_gte?: Maybe<number>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<ProductWhereInput[]>

	OR?: Maybe<ProductWhereInput[]>

	NOT?: Maybe<ProductWhereInput[]>
}

export enum UserRole {
	Admin = 'ADMIN',
	Moderator = 'MODERATOR',
	User = 'USER'
}

export enum NotificationOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MessageAsc = 'message_ASC',
	MessageDesc = 'message_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum CommentOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	ParentIdAsc = 'parentId_ASC',
	ParentIdDesc = 'parentId_DESC',
	PageIdAsc = 'pageId_ASC',
	PageIdDesc = 'pageId_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum UserOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	EmailAsc = 'email_ASC',
	EmailDesc = 'email_DESC',
	SetPrivateAsc = 'set_private_ASC',
	SetPrivateDesc = 'set_private_DESC',
	UsernameAsc = 'username_ASC',
	UsernameDesc = 'username_DESC',
	PasswordAsc = 'password_ASC',
	PasswordDesc = 'password_DESC',
	GitHubIdAsc = 'gitHubId_ASC',
	GitHubIdDesc = 'gitHubId_DESC',
	FacebookIdAsc = 'facebookId_ASC',
	FacebookIdDesc = 'facebookId_DESC',
	TwitterIdAsc = 'twitterId_ASC',
	TwitterIdDesc = 'twitterId_DESC',
	GmailIdAsc = 'gmailId_ASC',
	GmailIdDesc = 'gmailId_DESC',
	PrivateAsc = 'private_ASC',
	PrivateDesc = 'private_DESC',
	ConfirmedAsc = 'confirmed_ASC',
	ConfirmedDesc = 'confirmed_DESC',
	OnlineAsc = 'online_ASC',
	OnlineDesc = 'online_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	RoleAsc = 'role_ASC',
	RoleDesc = 'role_DESC'
}

export enum TeamOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	ConfirmedAsc = 'confirmed_ASC',
	ConfirmedDesc = 'confirmed_DESC',
	OnlineAsc = 'online_ASC',
	OnlineDesc = 'online_DESC'
}

export enum ChannelOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	PublicAsc = 'public_ASC',
	PublicDesc = 'public_DESC',
	TeamIdAsc = 'teamId_ASC',
	TeamIdDesc = 'teamId_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum MessageOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	ParentIdAsc = 'parentId_ASC',
	ParentIdDesc = 'parentId_DESC',
	UrlAsc = 'url_ASC',
	UrlDesc = 'url_DESC',
	FiletypeAsc = 'filetype_ASC',
	FiletypeDesc = 'filetype_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum TodoOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum ProductOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	StockAsc = 'stock_ASC',
	StockDesc = 'stock_DESC',
	PriceAsc = 'price_ASC',
	PriceDesc = 'price_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum MutationType {
	Created = 'CREATED',
	Updated = 'UPDATED',
	Deleted = 'DELETED'
}

export type DateTime = any

export type Upload = any

// ====================================================
// Documents
// ====================================================

export type RegisterVariables = {
	email: string
	password: string
	username: string
}

export type RegisterMutation = {
	__typename?: 'Mutation'

	register: RegisterRegister
}

export type RegisterRegister = {
	__typename?: 'RegisterResponse'

	ok: boolean

	result: string
}

export type LoginVariables = {
	email: string
	password: string
}

export type LoginMutation = {
	__typename?: 'Mutation'

	login: LoginLogin
}

export type LoginLogin = {
	__typename?: 'LoginResponse'

	ok: boolean

	token: Maybe<string>

	refreshToken: string

	user: Maybe<LoginUser>
}

export type LoginUser = {
	__typename?: 'User'

	id: string

	username: string
}

export type ForgotPasswordVariables = {
	email: string
}

export type ForgotPasswordMutation = {
	__typename?: 'Mutation'

	forgotPassword: ForgotPasswordForgotPassword
}

export type ForgotPasswordForgotPassword = {
	__typename?: 'ForgotPasswordResponse'

	ok: boolean

	result: string
}

export type CheckTokenVariables = {
	token: string
}

export type CheckTokenMutation = {
	__typename?: 'Mutation'

	checkToken: CheckTokenCheckToken
}

export type CheckTokenCheckToken = {
	__typename?: 'ForgotPasswordResponse'

	ok: boolean

	result: string
}

export type ResetPasswordVariables = {
	id: string
	password: string
}

export type ResetPasswordMutation = {
	__typename?: 'Mutation'

	resetPassword: ResetPasswordResetPassword
}

export type ResetPasswordResetPassword = {
	__typename?: 'ForgotPasswordResponse'

	ok: boolean

	result: string
}

export type AuthConfirmationVariables = {
	token: string
}

export type AuthConfirmationMutation = {
	__typename?: 'Mutation'

	authConfirmation: AuthConfirmationAuthConfirmation
}

export type AuthConfirmationAuthConfirmation = {
	__typename?: 'ForgotPasswordResponse'

	ok: boolean

	result: string
}

export type LogoutMutationVariables = {}

export type LogoutMutationMutation = {
	__typename?: 'Mutation'

	logout: boolean
}

export type ChannelMessageSubscriptionVariables = {
	channelId: string
}

export type ChannelMessageSubscriptionSubscription = {
	__typename?: 'Subscription'

	messageSubscription: ChannelMessageSubscriptionMessageSubscription
}

export type ChannelMessageSubscriptionMessageSubscription = {
	__typename?: 'MessageSubscriptionPayload'

	node: Maybe<ChannelMessageSubscriptionNode>
}

export type ChannelMessageSubscriptionNode = {
	__typename?: 'Message'

	id: string

	body: string

	parentId: string

	author: ChannelMessageSubscriptionAuthor

	createdAt: DateTime

	updatedAt: DateTime
}

export type ChannelMessageSubscriptionAuthor = {
	__typename?: 'User'

	online: boolean

	id: string

	username: string

	avatar_url: ChannelMessageSubscriptionAvatarUrl
}

export type ChannelMessageSubscriptionAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type RemoveTeamMemberVariables = {
	teamId: string
	userId: string
}

export type RemoveTeamMemberMutation = {
	__typename?: 'Mutation'

	removeTeamMember: Maybe<RemoveTeamMemberRemoveTeamMember>
}

export type RemoveTeamMemberRemoveTeamMember = {
	__typename?: 'Team'

	id: string

	name: string

	slug: string

	author: RemoveTeamMemberAuthor

	members: Maybe<RemoveTeamMemberMembers[]>
}

export type RemoveTeamMemberAuthor = {
	__typename?: 'User'

	id: string

	username: string
}

export type RemoveTeamMemberMembers = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type RemoveChannelMemberMutationVariables = {
	channelId: string
	userId: string
}

export type RemoveChannelMemberMutationMutation = {
	__typename?: 'Mutation'

	removeChannelMember: RemoveChannelMemberMutationRemoveChannelMember
}

export type RemoveChannelMemberMutationRemoveChannelMember = {
	__typename?: 'Channel'

	id: string

	name: string

	slug: string

	author: RemoveChannelMemberMutationAuthor

	members: Maybe<RemoveChannelMemberMutationMembers[]>

	messages: Maybe<RemoveChannelMemberMutationMessages[]>
}

export type RemoveChannelMemberMutationAuthor = {
	__typename?: 'User'

	id: string

	username: string
}

export type RemoveChannelMemberMutationMembers = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type RemoveChannelMemberMutationMessages = {
	__typename?: 'Message'

	id: string

	parentId: string

	body: string

	author: RemoveChannelMemberMutation_Author

	createdAt: DateTime

	updatedAt: DateTime
}

export type RemoveChannelMemberMutation_Author = {
	__typename?: 'User'

	id: string

	online: boolean

	username: string

	avatar_url: RemoveChannelMemberMutationAvatarUrl
}

export type RemoveChannelMemberMutationAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type ShowTeamQueryVariables = {
	teamSlug: string
}

export type ShowTeamQueryQuery = {
	__typename?: 'Query'

	showTeam: ShowTeamQueryShowTeam
}

export type ShowTeamQueryShowTeam = {
	__typename?: 'Team'

	id: string

	name: string

	slug: string

	moderators: Maybe<ShowTeamQueryModerators[]>

	author: ShowTeamQueryAuthor

	members: Maybe<ShowTeamQueryMembers[]>

	channels: Maybe<ShowTeamQueryChannels[]>

	createdAt: DateTime

	updatedAt: DateTime

	confirmed: boolean

	online: boolean
}

export type ShowTeamQueryModerators = {
	__typename?: 'User'

	id: string

	username: string
}

export type ShowTeamQueryAuthor = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean

	avatar_url: ShowTeamQueryAvatarUrl
}

export type ShowTeamQueryAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type ShowTeamQueryMembers = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean
}

export type ShowTeamQueryChannels = {
	__typename?: 'Channel'

	id: string

	name: string

	slug: string

	author: ShowTeamQuery_Author

	members: Maybe<ShowTeamQuery_Members[]>
}

export type ShowTeamQuery_Author = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean
}

export type ShowTeamQuery_Members = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>

	online: boolean
}

export type ShowChannelQueryVariables = {
	channelId: string
}

export type ShowChannelQueryQuery = {
	__typename?: 'Query'

	showChannel: ShowChannelQueryShowChannel
}

export type ShowChannelQueryShowChannel = {
	__typename?: 'Channel'

	id: string

	name: string

	slug: string

	members: Maybe<ShowChannelQueryMembers[]>

	messages: Maybe<ShowChannelQueryMessages[]>
}

export type ShowChannelQueryMembers = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>

	online: boolean
}

export type ShowChannelQueryMessages = {
	__typename?: 'Message'

	id: string

	parentId: string

	body: string

	author: ShowChannelQueryAuthor

	createdAt: DateTime

	updatedAt: DateTime
}

export type ShowChannelQueryAuthor = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean

	avatar_url: ShowChannelQueryAvatarUrl
}

export type ShowChannelQueryAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type CreateChannelMutationVariables = {
	name: string
	teamId: string
}

export type CreateChannelMutationMutation = {
	__typename?: 'Mutation'

	createChannel: CreateChannelMutationCreateChannel
}

export type CreateChannelMutationCreateChannel = {
	__typename?: 'Channel'

	id: string

	name: string

	slug: string

	members: Maybe<CreateChannelMutationMembers[]>

	author: CreateChannelMutationAuthor

	messages: Maybe<CreateChannelMutationMessages[]>
}

export type CreateChannelMutationMembers = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean
}

export type CreateChannelMutationAuthor = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean

	avatar_url: CreateChannelMutationAvatarUrl
}

export type CreateChannelMutationAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type CreateChannelMutationMessages = {
	__typename?: 'Message'

	id: string

	parentId: string

	body: string

	author: CreateChannelMutation_Author

	createdAt: DateTime

	updatedAt: DateTime
}

export type CreateChannelMutation_Author = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean

	avatar_url: CreateChannelMutation_AvatarUrl
}

export type CreateChannelMutation_AvatarUrl = {
	__typename?: 'File'

	url: string
}

export type CreateMessageMutationVariables = {
	body: string
	channelId: string
}

export type CreateMessageMutationMutation = {
	__typename?: 'Mutation'

	createMessage: CreateMessageMutationCreateMessage
}

export type CreateMessageMutationCreateMessage = {
	__typename?: 'Message'

	id: string

	parentId: string

	body: string

	author: CreateMessageMutationAuthor

	createdAt: DateTime

	updatedAt: DateTime
}

export type CreateMessageMutationAuthor = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean

	avatar_url: CreateMessageMutationAvatarUrl
}

export type CreateMessageMutationAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type AddChannelMemberMutationVariables = {
	userId: string
	channelId: string
}

export type AddChannelMemberMutationMutation = {
	__typename?: 'Mutation'

	addChannelMember: AddChannelMemberMutationAddChannelMember
}

export type AddChannelMemberMutationAddChannelMember = {
	__typename?: 'Channel'

	id: string

	name: string

	author: AddChannelMemberMutationAuthor

	moderators: Maybe<AddChannelMemberMutationModerators[]>

	members: Maybe<AddChannelMemberMutationMembers[]>
}

export type AddChannelMemberMutationAuthor = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean
}

export type AddChannelMemberMutationModerators = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean
}

export type AddChannelMemberMutationMembers = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean
}

export type AddTeamMemberMutationVariables = {
	userId: string
	teamId: string
}

export type AddTeamMemberMutationMutation = {
	__typename?: 'Mutation'

	addTeamMember: AddTeamMemberMutationAddTeamMember
}

export type AddTeamMemberMutationAddTeamMember = {
	__typename?: 'Team'

	id: string

	name: string

	author: AddTeamMemberMutationAuthor

	members: Maybe<AddTeamMemberMutationMembers[]>
}

export type AddTeamMemberMutationAuthor = {
	__typename?: 'User'

	id: string

	username: string
}

export type AddTeamMemberMutationMembers = {
	__typename?: 'User'

	id: string

	username: string
}

export type NewCommentSubscriptionVariables = {
	pageId: string
}

export type NewCommentSubscriptionSubscription = {
	__typename?: 'Subscription'

	newCommentSubscription: NewCommentSubscriptionNewCommentSubscription
}

export type NewCommentSubscriptionNewCommentSubscription = {
	__typename?: 'CommentSubscriptionPayload'

	node: Maybe<NewCommentSubscriptionNode>
}

export type NewCommentSubscriptionNode = MyCommentFragmentFragment

export type CommentMutationVariables = {
	body: string
	pageId: string
	parentId: string
	repliedTo?: Maybe<string>
}

export type CommentMutationMutation = {
	__typename?: 'Mutation'

	createComment: CommentMutationCreateComment
}

export type CommentMutationCreateComment = MyCommentFragmentFragment

export type QueryCommentVariables = {
	parentId: string
	offset?: Maybe<number>
	limit?: Maybe<number>
}

export type QueryCommentQuery = {
	__typename?: 'Query'

	queryComment: QueryCommentQueryComment
}

export type QueryCommentQueryComment = {
	__typename?: 'CommentConnection'

	pageInfo: QueryCommentPageInfo

	edges: QueryCommentEdges[]
}

export type QueryCommentPageInfo = {
	__typename?: 'PageInfo'

	hasPreviousPage: boolean

	endCursor: Maybe<string>

	hasNextPage: boolean

	startCursor: Maybe<string>
}

export type QueryCommentEdges = {
	__typename?: 'CommentEdge'

	node: QueryCommentNode
}

export type QueryCommentNode = MyCommentFragmentFragment

export type CreateReplyVariables = {
	body: string
	pageId: string
	parentId: string
	repliedTo?: Maybe<string>
}

export type CreateReplyMutation = {
	__typename?: 'Mutation'

	createReply: CreateReplyCreateReply
}

export type CreateReplyCreateReply = MyCommentFragmentFragment

export type LikeCommentVariables = {
	commentId: string
}

export type LikeCommentMutation = {
	__typename?: 'Mutation'

	likeComment: Maybe<LikeCommentLikeComment>
}

export type LikeCommentLikeComment = MyCommentFragmentFragment

export type EditCommentVariables = {
	id: string
	body: string
}

export type EditCommentMutation = {
	__typename?: 'Mutation'

	editComment: EditCommentEditComment
}

export type EditCommentEditComment = MyCommentFragmentFragment

export type DeleteCommentVariables = {
	id: string
}

export type DeleteCommentMutation = {
	__typename?: 'Mutation'

	deleteComment: DeleteCommentDeleteComment
}

export type DeleteCommentDeleteComment = {
	__typename?: 'DeleteCommentResponse'

	id: Maybe<string>

	parentId: Maybe<string>
}

export type FriendRequestSubscriptionVariables = {
	id: string
}

export type FriendRequestSubscriptionSubscription = {
	__typename?: 'Subscription'

	friendRequestSubscription: FriendRequestSubscriptionFriendRequestSubscription
}

export type FriendRequestSubscriptionFriendRequestSubscription = {
	__typename?: 'UserSubscriptionPayload'

	node: Maybe<FriendRequestSubscriptionNode>
}

export type FriendRequestSubscriptionNode = {
	__typename?: 'User'

	id: string

	username: string

	friend_requests: Maybe<FriendRequestSubscriptionFriendRequests[]>
}

export type FriendRequestSubscriptionFriendRequests = {
	__typename?: 'User'

	id: string

	username: string

	avatar_url: FriendRequestSubscriptionAvatarUrl
}

export type FriendRequestSubscriptionAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type FriendSubscriptionVariables = {
	id: string
}

export type FriendSubscriptionSubscription = {
	__typename?: 'Subscription'

	friendSubscription: FriendSubscriptionFriendSubscription
}

export type FriendSubscriptionFriendSubscription = {
	__typename?: 'UserSubscriptionPayload'

	node: Maybe<FriendSubscriptionNode>
}

export type FriendSubscriptionNode = {
	__typename?: 'User'

	id: string

	username: string

	friends: Maybe<FriendSubscriptionFriends[]>
}

export type FriendSubscriptionFriends = {
	__typename?: 'User'

	id: string

	username: string

	avatar_url: FriendSubscriptionAvatarUrl
}

export type FriendSubscriptionAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type NotificationSubscriptionVariables = {
	id: string
}

export type NotificationSubscriptionSubscription = {
	__typename?: 'Subscription'

	NotificationSubscription: NotificationSubscriptionNotificationSubscription
}

export type NotificationSubscriptionNotificationSubscription = {
	__typename?: 'NotificationSubscriptionPayload'

	node: Maybe<NotificationSubscriptionNode>
}

export type NotificationSubscriptionNode = {
	__typename?: 'Notification'

	id: string

	message: Maybe<string>

	comments: Maybe<NotificationSubscriptionComments>

	messages: Maybe<NotificationSubscriptionMessages>

	team: Maybe<NotificationSubscriptionTeam>

	channel: Maybe<NotificationSubscriptionChannel>

	friend_requests: Maybe<NotificationSubscriptionFriendRequests>

	friend: Maybe<NotificationSubscriptionFriend>
}

export type NotificationSubscriptionComments = MyCommentFragmentFragment

export type NotificationSubscriptionMessages = {
	__typename?: 'Message'

	id: string

	parentId: string

	body: string

	author: NotificationSubscriptionAuthor

	createdAt: DateTime

	updatedAt: DateTime
}

export type NotificationSubscriptionAuthor = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean

	avatar_url: NotificationSubscriptionAvatarUrl
}

export type NotificationSubscriptionAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type NotificationSubscriptionTeam = {
	__typename?: 'Team'

	id: string

	slug: string
}

export type NotificationSubscriptionChannel = {
	__typename?: 'Channel'

	id: string

	slug: string
}

export type NotificationSubscriptionFriendRequests = {
	__typename?: 'User'

	username: string

	createdAt: DateTime

	updatedAt: DateTime
} & FriendFragmentFragment

export type NotificationSubscriptionFriend = {
	__typename?: 'User'

	username: string

	createdAt: DateTime

	updatedAt: DateTime
} & FriendFragmentFragment

export type DeleteNotificationVariables = {
	id: string
}

export type DeleteNotificationMutation = {
	__typename?: 'Mutation'

	deleteNotification: Maybe<DeleteNotificationDeleteNotification>
}

export type DeleteNotificationDeleteNotification = {
	__typename?: 'DeleteNotificationResponse'

	ok: Maybe<boolean>

	errors: Maybe<DeleteNotificationErrors>
}

export type DeleteNotificationErrors = {
	__typename?: 'Error'

	path: string

	message: string
}

export type FetchNotificationsVariables = {}

export type FetchNotificationsQuery = {
	__typename?: 'Query'

	fetchNotifications: Maybe<FetchNotificationsFetchNotifications[]>
}

export type FetchNotificationsFetchNotifications = {
	__typename?: 'Notification'

	id: string

	message: Maybe<string>

	comments: Maybe<FetchNotificationsComments>

	messages: Maybe<FetchNotificationsMessages>

	team: Maybe<FetchNotificationsTeam>

	channel: Maybe<FetchNotificationsChannel>

	friend_requests: Maybe<FetchNotificationsFriendRequests>

	friend: Maybe<FetchNotificationsFriend>
}

export type FetchNotificationsComments = MyCommentFragmentFragment

export type FetchNotificationsMessages = {
	__typename?: 'Message'

	id: string

	parentId: string

	body: string

	author: FetchNotificationsAuthor

	createdAt: DateTime

	updatedAt: DateTime
}

export type FetchNotificationsAuthor = {
	__typename?: 'User'

	id: string

	username: string

	online: boolean

	avatar_url: FetchNotificationsAvatarUrl
}

export type FetchNotificationsAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type FetchNotificationsTeam = {
	__typename?: 'Team'

	id: string

	slug: string

	createdAt: DateTime
}

export type FetchNotificationsChannel = {
	__typename?: 'Channel'

	id: string

	slug: string

	createdAt: DateTime
}

export type FetchNotificationsFriendRequests = {
	__typename?: 'User'

	id: string

	username: string

	avatar_url: FetchNotifications_AvatarUrl

	createdAt: DateTime

	updatedAt: DateTime
}

export type FetchNotifications_AvatarUrl = {
	__typename?: 'File'

	url: string
}

export type FetchNotificationsFriend = {
	__typename?: 'User'

	id: string

	username: string

	avatar_url: FetchNotifications__AvatarUrl

	createdAt: DateTime

	updatedAt: DateTime
}

export type FetchNotifications__AvatarUrl = {
	__typename?: 'File'

	url: string
}

export type BlockOrUnblockUserVariables = {
	id: string
}

export type BlockOrUnblockUserMutation = {
	__typename?: 'Mutation'

	blockUser: Maybe<BlockOrUnblockUserBlockUser>
}

export type BlockOrUnblockUserBlockUser = {
	__typename?: 'MyUser'

	id: string

	username: string

	avatar_url: BlockOrUnblockUserAvatarUrl
}

export type BlockOrUnblockUserAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type GetProfileQueryVariables = {
	username: string
}

export type GetProfileQueryQuery = {
	__typename?: 'Query'

	getProfile: Maybe<GetProfileQueryGetProfile>
}

export type GetProfileQueryGetProfile = {
	__typename?: 'ProfileResponse'

	user: Maybe<GetProfileQueryUser>

	errors: Maybe<GetProfileQueryErrors>
}

export type GetProfileQueryUser = {
	__typename?: 'MyUser'

	id: string

	username: string

	createdAt: string

	updatedAt: string

	private: boolean

	blockedUsers: Maybe<GetProfileQueryBlockedUsers[]>

	friends: Maybe<GetProfileQueryFriends[]>

	avatar_url: GetProfileQuery_AvatarUrl

	friend_requests: Maybe<GetProfileQueryFriendRequests[]>
}

export type GetProfileQueryBlockedUsers = {
	__typename?: 'User'

	username: string

	id: string

	avatar_url: GetProfileQueryAvatarUrl
}

export type GetProfileQueryAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type GetProfileQueryFriends = FriendFragmentFragment

export type GetProfileQuery_AvatarUrl = {
	__typename?: 'File'

	url: string
}

export type GetProfileQueryFriendRequests = FriendFragmentFragment

export type GetProfileQueryErrors = {
	__typename?: 'ProfileError'

	message: Maybe<string>

	username: Maybe<string>

	avatar_url: Maybe<GetProfileQuery__AvatarUrl>

	error: Maybe<string>
}

export type GetProfileQuery__AvatarUrl = {
	__typename?: 'File'

	url: string
}

export type FriendRequestMutationVariables = {
	requestedId: string
}

export type FriendRequestMutationMutation = {
	__typename?: 'Mutation'

	friendRequest: FriendRequestMutationFriendRequest
}

export type FriendRequestMutationFriendRequest = {
	__typename?: 'VoidResponse'

	ok: Maybe<boolean>

	errors: Maybe<FriendRequestMutationErrors[]>
}

export type FriendRequestMutationErrors = {
	__typename?: 'Error'

	path: string

	message: string
}

export type AddFriendMutationVariables = {
	requestedId: string
}

export type AddFriendMutationMutation = {
	__typename?: 'Mutation'

	addFriend: AddFriendMutationAddFriend
}

export type AddFriendMutationAddFriend = {
	__typename?: 'AddFriendResponse'

	user: Maybe<AddFriendMutationUser>

	ok: boolean

	errors: Maybe<AddFriendMutationErrors[]>
}

export type AddFriendMutationUser = FriendFragmentFragment

export type AddFriendMutationErrors = {
	__typename?: 'Error'

	path: string

	message: string
}

export type RejectFriendMutationVariables = {
	id: string
}

export type RejectFriendMutationMutation = {
	__typename?: 'Mutation'

	friendReject: RejectFriendMutationFriendReject
}

export type RejectFriendMutationFriendReject = {
	__typename?: 'VoidResponse'

	ok: Maybe<boolean>

	errors: Maybe<RejectFriendMutationErrors[]>
}

export type RejectFriendMutationErrors = {
	__typename?: 'Error'

	path: string

	message: string
}

export type CreateTeamMutationVariables = {
	name: string
}

export type CreateTeamMutationMutation = {
	__typename?: 'Mutation'

	createTeam: CreateTeamMutationCreateTeam
}

export type CreateTeamMutationCreateTeam = {
	__typename?: 'Team'

	name: string

	id: string

	slug: string

	channels: Maybe<CreateTeamMutationChannels[]>
}

export type CreateTeamMutationChannels = {
	__typename?: 'Channel'

	slug: string
}

export type SetProfilePrivacyVariables = {
	bool: boolean
}

export type SetProfilePrivacyMutation = {
	__typename?: 'Mutation'

	setProfilePrivacy: Maybe<SetProfilePrivacySetProfilePrivacy>
}

export type SetProfilePrivacySetProfilePrivacy = {
	__typename?: 'MyUser'

	private: boolean
}

export type UnBlockUserVariables = {
	id: string
}

export type UnBlockUserMutation = {
	__typename?: 'Mutation'

	unblockUser: Maybe<UnBlockUserUnblockUser>
}

export type UnBlockUserUnblockUser = {
	__typename?: 'MyUser'

	id: string

	username: string

	avatar_url: UnBlockUserAvatarUrl
}

export type UnBlockUserAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type UpdateProfileVariables = {
	username?: Maybe<string>
	oldPassword?: Maybe<string>
	newPassword?: Maybe<string>
	avatar: Upload
}

export type UpdateProfileMutation = {
	__typename?: 'Mutation'

	updateProfile: Maybe<UpdateProfileUpdateProfile>
}

export type UpdateProfileUpdateProfile = {
	__typename?: 'UpdateProfileResponse'

	avatar: Maybe<UpdateProfileAvatar>

	username: Maybe<string>
}

export type UpdateProfileAvatar = {
	__typename?: 'File'

	url: string
}

export type QueryUsersVariables = {}

export type QueryUsersQuery = {
	__typename?: 'Query'

	queryUsers: Maybe<QueryUsersQueryUsers[]>
}

export type QueryUsersQueryUsers = {
	__typename?: 'MyUser'

	username: string

	id: string
}

export type ShowTeamsQueryVariables = {
	authorId: string
}

export type ShowTeamsQueryQuery = {
	__typename?: 'Query'

	showTeams: Maybe<ShowTeamsQueryShowTeams[]>
}

export type ShowTeamsQueryShowTeams = {
	__typename?: 'Team'

	id: string

	slug: string

	name: string

	channels: Maybe<ShowTeamsQueryChannels[]>
}

export type ShowTeamsQueryChannels = {
	__typename?: 'Channel'

	slug: string
}

export type CurrentUserQueryVariables = {}

export type CurrentUserQueryQuery = {
	__typename?: 'Query'

	currentUser: Maybe<CurrentUserQueryCurrentUser>
}

export type CurrentUserQueryCurrentUser = {
	__typename?: 'MyUser'

	email: string

	id: string

	username: string
}

export type MyCommentFragmentFragment = {
	__typename?: 'Comment'

	id: string

	parentId: string

	body: string

	repliedTo: Maybe<MyCommentFragmentRepliedTo>

	createdAt: DateTime

	pageId: string

	updatedAt: DateTime

	ratings: MyCommentFragmentRatings

	replies: Maybe<MyCommentFragmentReplies[]>

	author: MyCommentFragment_____Author
}

export type MyCommentFragmentRepliedTo = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragmentRatings = {
	__typename?: 'Rating'

	vote: number

	id: string

	author: Maybe<MyCommentFragmentAuthor[]>
}

export type MyCommentFragmentAuthor = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragmentReplies = {
	__typename?: 'Comment'

	id: string

	parentId: string

	ratings: MyCommentFragment_Ratings

	body: string

	pageId: string

	repliedTo: Maybe<MyCommentFragment_RepliedTo>

	createdAt: DateTime

	replies: Maybe<MyCommentFragment_Replies[]>

	updatedAt: DateTime

	author: MyCommentFragment____Author
}

export type MyCommentFragment_Ratings = {
	__typename?: 'Rating'

	vote: number

	id: string

	author: Maybe<MyCommentFragment_Author[]>
}

export type MyCommentFragment_Author = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment_RepliedTo = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment_Replies = {
	__typename?: 'Comment'

	id: string

	parentId: string

	ratings: MyCommentFragment__Ratings

	body: string

	pageId: string

	repliedTo: Maybe<MyCommentFragment__RepliedTo>

	updatedAt: DateTime

	author: MyCommentFragment___Author
}

export type MyCommentFragment__Ratings = {
	__typename?: 'Rating'

	vote: number

	id: string

	author: Maybe<MyCommentFragment__Author[]>
}

export type MyCommentFragment__Author = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment__RepliedTo = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment___Author = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment____Author = {
	__typename?: 'User'

	id: string

	username: string
}

export type MyCommentFragment_____Author = {
	__typename?: 'User'

	id: string

	username: string

	avatar_url: MyCommentFragmentAvatarUrl
}

export type MyCommentFragmentAvatarUrl = {
	__typename?: 'File'

	url: string
}

export type FriendFragmentFragment = {
	__typename?: 'User'

	id: string

	username: string

	avatar_url: FriendFragmentAvatarUrl
}

export type FriendFragmentAvatarUrl = {
	__typename?: 'File'

	url: string
}

import * as ReactApollo from 'react-apollo'
import * as React from 'react'

import gql from 'graphql-tag'

// ====================================================
// Fragments
// ====================================================

export const MyCommentFragmentFragmentDoc = gql`
	fragment MyCommentFragment on Comment {
		id
		parentId
		body
		repliedTo {
			id
			username
		}
		createdAt
		pageId
		updatedAt
		ratings {
			vote
			id
			author {
				id
				username
			}
		}
		replies {
			id
			parentId
			ratings {
				vote
				id
				author {
					id
					username
				}
			}
			body
			pageId
			repliedTo {
				id
				username
			}
			createdAt
			replies {
				id
				parentId
				ratings {
					vote
					id
					author {
						id
						username
					}
				}
				body
				pageId
				repliedTo {
					id
					username
				}
				updatedAt
				author {
					id
					username
				}
			}
			updatedAt
			author {
				id
				username
			}
		}
		author {
			id
			username
			avatar_url {
				url
			}
		}
	}
`

export const FriendFragmentFragmentDoc = gql`
	fragment FriendFragment on User {
		id
		username
		avatar_url {
			url
		}
	}
`

// ====================================================
// Components
// ====================================================

export const RegisterDocument = gql`
	mutation Register($email: String!, $password: String!, $username: String!) {
		register(email: $email, password: $password, username: $username) {
			ok
			result
		}
	}
`
export class RegisterComponent extends React.Component<
	Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<RegisterMutation, RegisterVariables>
				mutation={RegisterDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type RegisterProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
	TChildProps
export type RegisterMutationFn = ReactApollo.MutationFn<RegisterMutation, RegisterVariables>
export function RegisterHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				RegisterMutation,
				RegisterVariables,
				RegisterProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		RegisterMutation,
		RegisterVariables,
		RegisterProps<TChildProps>
	>(RegisterDocument, operationOptions)
}
export const LoginDocument = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			ok
			token
			refreshToken
			user {
				id
				username
			}
		}
	}
`
export class LoginComponent extends React.Component<
	Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<LoginMutation, LoginVariables>
				mutation={LoginDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type LoginProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
	TChildProps
export type LoginMutationFn = ReactApollo.MutationFn<LoginMutation, LoginVariables>
export function LoginHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				LoginMutation,
				LoginVariables,
				LoginProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<TProps, LoginMutation, LoginVariables, LoginProps<TChildProps>>(
		LoginDocument,
		operationOptions
	)
}
export const ForgotPasswordDocument = gql`
	mutation ForgotPassword($email: String!) {
		forgotPassword(email: $email) {
			ok
			result
		}
	}
`
export class ForgotPasswordComponent extends React.Component<
	Partial<ReactApollo.MutationProps<ForgotPasswordMutation, ForgotPasswordVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordVariables>
				mutation={ForgotPasswordDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type ForgotPasswordProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<ForgotPasswordMutation, ForgotPasswordVariables>
> &
	TChildProps
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
	ForgotPasswordMutation,
	ForgotPasswordVariables
>
export function ForgotPasswordHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				ForgotPasswordMutation,
				ForgotPasswordVariables,
				ForgotPasswordProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		ForgotPasswordMutation,
		ForgotPasswordVariables,
		ForgotPasswordProps<TChildProps>
	>(ForgotPasswordDocument, operationOptions)
}
export const CheckTokenDocument = gql`
	mutation CheckToken($token: String!) {
		checkToken(token: $token) {
			ok
			result
		}
	}
`
export class CheckTokenComponent extends React.Component<
	Partial<ReactApollo.MutationProps<CheckTokenMutation, CheckTokenVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<CheckTokenMutation, CheckTokenVariables>
				mutation={CheckTokenDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CheckTokenProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CheckTokenMutation, CheckTokenVariables>
> &
	TChildProps
export type CheckTokenMutationFn = ReactApollo.MutationFn<CheckTokenMutation, CheckTokenVariables>
export function CheckTokenHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CheckTokenMutation,
				CheckTokenVariables,
				CheckTokenProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CheckTokenMutation,
		CheckTokenVariables,
		CheckTokenProps<TChildProps>
	>(CheckTokenDocument, operationOptions)
}
export const ResetPasswordDocument = gql`
	mutation ResetPassword($id: ID!, $password: String!) {
		resetPassword(id: $id, password: $password) {
			ok
			result
		}
	}
`
export class ResetPasswordComponent extends React.Component<
	Partial<ReactApollo.MutationProps<ResetPasswordMutation, ResetPasswordVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<ResetPasswordMutation, ResetPasswordVariables>
				mutation={ResetPasswordDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type ResetPasswordProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<ResetPasswordMutation, ResetPasswordVariables>
> &
	TChildProps
export type ResetPasswordMutationFn = ReactApollo.MutationFn<
	ResetPasswordMutation,
	ResetPasswordVariables
>
export function ResetPasswordHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				ResetPasswordMutation,
				ResetPasswordVariables,
				ResetPasswordProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		ResetPasswordMutation,
		ResetPasswordVariables,
		ResetPasswordProps<TChildProps>
	>(ResetPasswordDocument, operationOptions)
}
export const AuthConfirmationDocument = gql`
	mutation AuthConfirmation($token: String!) {
		authConfirmation(token: $token) {
			ok
			result
		}
	}
`
export class AuthConfirmationComponent extends React.Component<
	Partial<ReactApollo.MutationProps<AuthConfirmationMutation, AuthConfirmationVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<AuthConfirmationMutation, AuthConfirmationVariables>
				mutation={AuthConfirmationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type AuthConfirmationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<AuthConfirmationMutation, AuthConfirmationVariables>
> &
	TChildProps
export type AuthConfirmationMutationFn = ReactApollo.MutationFn<
	AuthConfirmationMutation,
	AuthConfirmationVariables
>
export function AuthConfirmationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				AuthConfirmationMutation,
				AuthConfirmationVariables,
				AuthConfirmationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		AuthConfirmationMutation,
		AuthConfirmationVariables,
		AuthConfirmationProps<TChildProps>
	>(AuthConfirmationDocument, operationOptions)
}
export const LogoutMutationDocument = gql`
	mutation LogoutMutation {
		logout
	}
`
export class LogoutMutationComponent extends React.Component<
	Partial<ReactApollo.MutationProps<LogoutMutationMutation, LogoutMutationVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<LogoutMutationMutation, LogoutMutationVariables>
				mutation={LogoutMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type LogoutMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<LogoutMutationMutation, LogoutMutationVariables>
> &
	TChildProps
export type LogoutMutationMutationFn = ReactApollo.MutationFn<
	LogoutMutationMutation,
	LogoutMutationVariables
>
export function LogoutMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				LogoutMutationMutation,
				LogoutMutationVariables,
				LogoutMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		LogoutMutationMutation,
		LogoutMutationVariables,
		LogoutMutationProps<TChildProps>
	>(LogoutMutationDocument, operationOptions)
}
export const ChannelMessageSubscriptionDocument = gql`
	subscription ChannelMessageSubscription($channelId: ID!) {
		messageSubscription(channelId: $channelId) {
			node {
				id
				body
				parentId
				author {
					online
					id
					username
					avatar_url {
						url
					}
				}
				createdAt
				updatedAt
			}
		}
	}
`
export class ChannelMessageSubscriptionComponent extends React.Component<
	Partial<
		ReactApollo.SubscriptionProps<
			ChannelMessageSubscriptionSubscription,
			ChannelMessageSubscriptionVariables
		>
	>
> {
	render() {
		return (
			<ReactApollo.Subscription<
				ChannelMessageSubscriptionSubscription,
				ChannelMessageSubscriptionVariables
			>
				subscription={ChannelMessageSubscriptionDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type ChannelMessageSubscriptionProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<
		ChannelMessageSubscriptionSubscription,
		ChannelMessageSubscriptionVariables
	>
> &
	TChildProps
export function ChannelMessageSubscriptionHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				ChannelMessageSubscriptionSubscription,
				ChannelMessageSubscriptionVariables,
				ChannelMessageSubscriptionProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		ChannelMessageSubscriptionSubscription,
		ChannelMessageSubscriptionVariables,
		ChannelMessageSubscriptionProps<TChildProps>
	>(ChannelMessageSubscriptionDocument, operationOptions)
}
export const RemoveTeamMemberDocument = gql`
	mutation RemoveTeamMember($teamId: ID!, $userId: ID!) {
		removeTeamMember(teamId: $teamId, userId: $userId) {
			id
			name
			slug
			author {
				id
				username
			}
			members {
				id
				username
				email
			}
		}
	}
`
export class RemoveTeamMemberComponent extends React.Component<
	Partial<ReactApollo.MutationProps<RemoveTeamMemberMutation, RemoveTeamMemberVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<RemoveTeamMemberMutation, RemoveTeamMemberVariables>
				mutation={RemoveTeamMemberDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type RemoveTeamMemberProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<RemoveTeamMemberMutation, RemoveTeamMemberVariables>
> &
	TChildProps
export type RemoveTeamMemberMutationFn = ReactApollo.MutationFn<
	RemoveTeamMemberMutation,
	RemoveTeamMemberVariables
>
export function RemoveTeamMemberHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				RemoveTeamMemberMutation,
				RemoveTeamMemberVariables,
				RemoveTeamMemberProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		RemoveTeamMemberMutation,
		RemoveTeamMemberVariables,
		RemoveTeamMemberProps<TChildProps>
	>(RemoveTeamMemberDocument, operationOptions)
}
export const RemoveChannelMemberMutationDocument = gql`
	mutation removeChannelMemberMutation($channelId: ID!, $userId: ID!) {
		removeChannelMember(channelId: $channelId, userId: $userId) {
			id
			name
			slug
			author {
				id
				username
			}
			members {
				id
				username
				email
			}
			messages {
				id
				parentId
				body
				author {
					id
					online
					username
					avatar_url {
						url
					}
				}
				createdAt
				updatedAt
			}
		}
	}
`
export class RemoveChannelMemberMutationComponent extends React.Component<
	Partial<
		ReactApollo.MutationProps<
			RemoveChannelMemberMutationMutation,
			RemoveChannelMemberMutationVariables
		>
	>
> {
	render() {
		return (
			<ReactApollo.Mutation<
				RemoveChannelMemberMutationMutation,
				RemoveChannelMemberMutationVariables
			>
				mutation={RemoveChannelMemberMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type RemoveChannelMemberMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<
		RemoveChannelMemberMutationMutation,
		RemoveChannelMemberMutationVariables
	>
> &
	TChildProps
export type RemoveChannelMemberMutationMutationFn = ReactApollo.MutationFn<
	RemoveChannelMemberMutationMutation,
	RemoveChannelMemberMutationVariables
>
export function RemoveChannelMemberMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				RemoveChannelMemberMutationMutation,
				RemoveChannelMemberMutationVariables,
				RemoveChannelMemberMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		RemoveChannelMemberMutationMutation,
		RemoveChannelMemberMutationVariables,
		RemoveChannelMemberMutationProps<TChildProps>
	>(RemoveChannelMemberMutationDocument, operationOptions)
}
export const ShowTeamQueryDocument = gql`
	query ShowTeamQuery($teamSlug: String!) {
		showTeam(teamSlug: $teamSlug) {
			id
			name
			slug
			moderators {
				id
				username
			}
			author {
				id
				username
				online
				avatar_url {
					url
				}
			}
			members {
				id
				username
				online
			}
			channels {
				id
				name
				slug
				author {
					id
					username
					online
				}
				members {
					id
					username
					email
					online
				}
			}
			createdAt
			updatedAt
			confirmed
			online
		}
	}
`
export class ShowTeamQueryComponent extends React.Component<
	Partial<ReactApollo.QueryProps<ShowTeamQueryQuery, ShowTeamQueryVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<ShowTeamQueryQuery, ShowTeamQueryVariables>
				query={ShowTeamQueryDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type ShowTeamQueryProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<ShowTeamQueryQuery, ShowTeamQueryVariables>
> &
	TChildProps
export function ShowTeamQueryHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				ShowTeamQueryQuery,
				ShowTeamQueryVariables,
				ShowTeamQueryProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		ShowTeamQueryQuery,
		ShowTeamQueryVariables,
		ShowTeamQueryProps<TChildProps>
	>(ShowTeamQueryDocument, operationOptions)
}
export const ShowChannelQueryDocument = gql`
	query ShowChannelQuery($channelId: ID!) {
		showChannel(channelId: $channelId) {
			id
			name
			slug
			members {
				id
				username
				email
				online
			}
			messages {
				id
				parentId
				body
				author {
					id
					username
					online
					avatar_url {
						url
					}
				}
				createdAt
				updatedAt
			}
		}
	}
`
export class ShowChannelQueryComponent extends React.Component<
	Partial<ReactApollo.QueryProps<ShowChannelQueryQuery, ShowChannelQueryVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<ShowChannelQueryQuery, ShowChannelQueryVariables>
				query={ShowChannelQueryDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type ShowChannelQueryProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<ShowChannelQueryQuery, ShowChannelQueryVariables>
> &
	TChildProps
export function ShowChannelQueryHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				ShowChannelQueryQuery,
				ShowChannelQueryVariables,
				ShowChannelQueryProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		ShowChannelQueryQuery,
		ShowChannelQueryVariables,
		ShowChannelQueryProps<TChildProps>
	>(ShowChannelQueryDocument, operationOptions)
}
export const CreateChannelMutationDocument = gql`
	mutation CreateChannelMutation($name: String!, $teamId: ID!) {
		createChannel(name: $name, teamId: $teamId) {
			id
			name
			slug
			members {
				id
				username
				online
			}
			author {
				id
				username
				online
				avatar_url {
					url
				}
			}
			messages {
				id
				parentId
				body
				author {
					id
					username
					online
					avatar_url {
						url
					}
				}
				createdAt
				updatedAt
			}
		}
	}
`
export class CreateChannelMutationComponent extends React.Component<
	Partial<
		ReactApollo.MutationProps<CreateChannelMutationMutation, CreateChannelMutationVariables>
	>
> {
	render() {
		return (
			<ReactApollo.Mutation<CreateChannelMutationMutation, CreateChannelMutationVariables>
				mutation={CreateChannelMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CreateChannelMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CreateChannelMutationMutation, CreateChannelMutationVariables>
> &
	TChildProps
export type CreateChannelMutationMutationFn = ReactApollo.MutationFn<
	CreateChannelMutationMutation,
	CreateChannelMutationVariables
>
export function CreateChannelMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CreateChannelMutationMutation,
				CreateChannelMutationVariables,
				CreateChannelMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CreateChannelMutationMutation,
		CreateChannelMutationVariables,
		CreateChannelMutationProps<TChildProps>
	>(CreateChannelMutationDocument, operationOptions)
}
export const CreateMessageMutationDocument = gql`
	mutation CreateMessageMutation($body: String!, $channelId: ID!) {
		createMessage(body: $body, channelId: $channelId) {
			id
			parentId
			body
			author {
				id
				username
				online
				avatar_url {
					url
				}
			}
			createdAt
			updatedAt
		}
	}
`
export class CreateMessageMutationComponent extends React.Component<
	Partial<
		ReactApollo.MutationProps<CreateMessageMutationMutation, CreateMessageMutationVariables>
	>
> {
	render() {
		return (
			<ReactApollo.Mutation<CreateMessageMutationMutation, CreateMessageMutationVariables>
				mutation={CreateMessageMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CreateMessageMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CreateMessageMutationMutation, CreateMessageMutationVariables>
> &
	TChildProps
export type CreateMessageMutationMutationFn = ReactApollo.MutationFn<
	CreateMessageMutationMutation,
	CreateMessageMutationVariables
>
export function CreateMessageMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CreateMessageMutationMutation,
				CreateMessageMutationVariables,
				CreateMessageMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CreateMessageMutationMutation,
		CreateMessageMutationVariables,
		CreateMessageMutationProps<TChildProps>
	>(CreateMessageMutationDocument, operationOptions)
}
export const AddChannelMemberMutationDocument = gql`
	mutation AddChannelMemberMutation($userId: ID!, $channelId: ID!) {
		addChannelMember(userId: $userId, channelId: $channelId) {
			id
			name
			author {
				id
				username
				online
			}
			moderators {
				id
				username
				online
			}
			members {
				id
				username
				online
			}
		}
	}
`
export class AddChannelMemberMutationComponent extends React.Component<
	Partial<
		ReactApollo.MutationProps<
			AddChannelMemberMutationMutation,
			AddChannelMemberMutationVariables
		>
	>
> {
	render() {
		return (
			<ReactApollo.Mutation<
				AddChannelMemberMutationMutation,
				AddChannelMemberMutationVariables
			>
				mutation={AddChannelMemberMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type AddChannelMemberMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<AddChannelMemberMutationMutation, AddChannelMemberMutationVariables>
> &
	TChildProps
export type AddChannelMemberMutationMutationFn = ReactApollo.MutationFn<
	AddChannelMemberMutationMutation,
	AddChannelMemberMutationVariables
>
export function AddChannelMemberMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				AddChannelMemberMutationMutation,
				AddChannelMemberMutationVariables,
				AddChannelMemberMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		AddChannelMemberMutationMutation,
		AddChannelMemberMutationVariables,
		AddChannelMemberMutationProps<TChildProps>
	>(AddChannelMemberMutationDocument, operationOptions)
}
export const AddTeamMemberMutationDocument = gql`
	mutation AddTeamMemberMutation($userId: ID!, $teamId: ID!) {
		addTeamMember(userId: $userId, teamId: $teamId) {
			id
			name
			author {
				id
				username
			}
			members {
				id
				username
			}
		}
	}
`
export class AddTeamMemberMutationComponent extends React.Component<
	Partial<
		ReactApollo.MutationProps<AddTeamMemberMutationMutation, AddTeamMemberMutationVariables>
	>
> {
	render() {
		return (
			<ReactApollo.Mutation<AddTeamMemberMutationMutation, AddTeamMemberMutationVariables>
				mutation={AddTeamMemberMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type AddTeamMemberMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<AddTeamMemberMutationMutation, AddTeamMemberMutationVariables>
> &
	TChildProps
export type AddTeamMemberMutationMutationFn = ReactApollo.MutationFn<
	AddTeamMemberMutationMutation,
	AddTeamMemberMutationVariables
>
export function AddTeamMemberMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				AddTeamMemberMutationMutation,
				AddTeamMemberMutationVariables,
				AddTeamMemberMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		AddTeamMemberMutationMutation,
		AddTeamMemberMutationVariables,
		AddTeamMemberMutationProps<TChildProps>
	>(AddTeamMemberMutationDocument, operationOptions)
}
export const NewCommentSubscriptionDocument = gql`
	subscription NewCommentSubscription($pageId: ID!) {
		newCommentSubscription(pageId: $pageId) {
			node {
				...MyCommentFragment
			}
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class NewCommentSubscriptionComponent extends React.Component<
	Partial<
		ReactApollo.SubscriptionProps<
			NewCommentSubscriptionSubscription,
			NewCommentSubscriptionVariables
		>
	>
> {
	render() {
		return (
			<ReactApollo.Subscription<
				NewCommentSubscriptionSubscription,
				NewCommentSubscriptionVariables
			>
				subscription={NewCommentSubscriptionDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type NewCommentSubscriptionProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<NewCommentSubscriptionSubscription, NewCommentSubscriptionVariables>
> &
	TChildProps
export function NewCommentSubscriptionHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				NewCommentSubscriptionSubscription,
				NewCommentSubscriptionVariables,
				NewCommentSubscriptionProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		NewCommentSubscriptionSubscription,
		NewCommentSubscriptionVariables,
		NewCommentSubscriptionProps<TChildProps>
	>(NewCommentSubscriptionDocument, operationOptions)
}
export const CommentMutationDocument = gql`
	mutation CommentMutation($body: String!, $pageId: ID!, $parentId: ID!, $repliedTo: ID) {
		createComment(body: $body, pageId: $pageId, parentId: $parentId, repliedTo: $repliedTo) {
			...MyCommentFragment
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class CommentMutationComponent extends React.Component<
	Partial<ReactApollo.MutationProps<CommentMutationMutation, CommentMutationVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<CommentMutationMutation, CommentMutationVariables>
				mutation={CommentMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CommentMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CommentMutationMutation, CommentMutationVariables>
> &
	TChildProps
export type CommentMutationMutationFn = ReactApollo.MutationFn<
	CommentMutationMutation,
	CommentMutationVariables
>
export function CommentMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CommentMutationMutation,
				CommentMutationVariables,
				CommentMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CommentMutationMutation,
		CommentMutationVariables,
		CommentMutationProps<TChildProps>
	>(CommentMutationDocument, operationOptions)
}
export const QueryCommentDocument = gql`
	query QueryComment($parentId: ID!, $offset: Int, $limit: Int) {
		queryComment(parentId: $parentId, offset: $offset, limit: $limit) {
			pageInfo {
				hasPreviousPage
				endCursor
				hasNextPage
				startCursor
			}
			edges {
				node {
					...MyCommentFragment
				}
			}
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class QueryCommentComponent extends React.Component<
	Partial<ReactApollo.QueryProps<QueryCommentQuery, QueryCommentVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<QueryCommentQuery, QueryCommentVariables>
				query={QueryCommentDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type QueryCommentProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<QueryCommentQuery, QueryCommentVariables>
> &
	TChildProps
export function QueryCommentHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				QueryCommentQuery,
				QueryCommentVariables,
				QueryCommentProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		QueryCommentQuery,
		QueryCommentVariables,
		QueryCommentProps<TChildProps>
	>(QueryCommentDocument, operationOptions)
}
export const CreateReplyDocument = gql`
	mutation CreateReply($body: String!, $pageId: ID!, $parentId: ID!, $repliedTo: ID) {
		createReply(body: $body, pageId: $pageId, parentId: $parentId, repliedTo: $repliedTo) {
			...MyCommentFragment
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class CreateReplyComponent extends React.Component<
	Partial<ReactApollo.MutationProps<CreateReplyMutation, CreateReplyVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<CreateReplyMutation, CreateReplyVariables>
				mutation={CreateReplyDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CreateReplyProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CreateReplyMutation, CreateReplyVariables>
> &
	TChildProps
export type CreateReplyMutationFn = ReactApollo.MutationFn<
	CreateReplyMutation,
	CreateReplyVariables
>
export function CreateReplyHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CreateReplyMutation,
				CreateReplyVariables,
				CreateReplyProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CreateReplyMutation,
		CreateReplyVariables,
		CreateReplyProps<TChildProps>
	>(CreateReplyDocument, operationOptions)
}
export const LikeCommentDocument = gql`
	mutation LikeComment($commentId: ID!) {
		likeComment(commentId: $commentId) {
			...MyCommentFragment
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class LikeCommentComponent extends React.Component<
	Partial<ReactApollo.MutationProps<LikeCommentMutation, LikeCommentVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<LikeCommentMutation, LikeCommentVariables>
				mutation={LikeCommentDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type LikeCommentProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<LikeCommentMutation, LikeCommentVariables>
> &
	TChildProps
export type LikeCommentMutationFn = ReactApollo.MutationFn<
	LikeCommentMutation,
	LikeCommentVariables
>
export function LikeCommentHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				LikeCommentMutation,
				LikeCommentVariables,
				LikeCommentProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		LikeCommentMutation,
		LikeCommentVariables,
		LikeCommentProps<TChildProps>
	>(LikeCommentDocument, operationOptions)
}
export const EditCommentDocument = gql`
	mutation EditComment($id: ID!, $body: String!) {
		editComment(id: $id, body: $body) {
			...MyCommentFragment
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class EditCommentComponent extends React.Component<
	Partial<ReactApollo.MutationProps<EditCommentMutation, EditCommentVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<EditCommentMutation, EditCommentVariables>
				mutation={EditCommentDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type EditCommentProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<EditCommentMutation, EditCommentVariables>
> &
	TChildProps
export type EditCommentMutationFn = ReactApollo.MutationFn<
	EditCommentMutation,
	EditCommentVariables
>
export function EditCommentHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				EditCommentMutation,
				EditCommentVariables,
				EditCommentProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		EditCommentMutation,
		EditCommentVariables,
		EditCommentProps<TChildProps>
	>(EditCommentDocument, operationOptions)
}
export const DeleteCommentDocument = gql`
	mutation DeleteComment($id: ID!) {
		deleteComment(id: $id) {
			id
			parentId
		}
	}
`
export class DeleteCommentComponent extends React.Component<
	Partial<ReactApollo.MutationProps<DeleteCommentMutation, DeleteCommentVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<DeleteCommentMutation, DeleteCommentVariables>
				mutation={DeleteCommentDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type DeleteCommentProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<DeleteCommentMutation, DeleteCommentVariables>
> &
	TChildProps
export type DeleteCommentMutationFn = ReactApollo.MutationFn<
	DeleteCommentMutation,
	DeleteCommentVariables
>
export function DeleteCommentHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				DeleteCommentMutation,
				DeleteCommentVariables,
				DeleteCommentProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		DeleteCommentMutation,
		DeleteCommentVariables,
		DeleteCommentProps<TChildProps>
	>(DeleteCommentDocument, operationOptions)
}
export const FriendRequestSubscriptionDocument = gql`
	subscription FriendRequestSubscription($id: ID!) {
		friendRequestSubscription(id: $id) {
			node {
				id
				username
				friend_requests {
					id
					username
					avatar_url {
						url
					}
				}
			}
		}
	}
`
export class FriendRequestSubscriptionComponent extends React.Component<
	Partial<
		ReactApollo.SubscriptionProps<
			FriendRequestSubscriptionSubscription,
			FriendRequestSubscriptionVariables
		>
	>
> {
	render() {
		return (
			<ReactApollo.Subscription<
				FriendRequestSubscriptionSubscription,
				FriendRequestSubscriptionVariables
			>
				subscription={FriendRequestSubscriptionDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type FriendRequestSubscriptionProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<FriendRequestSubscriptionSubscription, FriendRequestSubscriptionVariables>
> &
	TChildProps
export function FriendRequestSubscriptionHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				FriendRequestSubscriptionSubscription,
				FriendRequestSubscriptionVariables,
				FriendRequestSubscriptionProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		FriendRequestSubscriptionSubscription,
		FriendRequestSubscriptionVariables,
		FriendRequestSubscriptionProps<TChildProps>
	>(FriendRequestSubscriptionDocument, operationOptions)
}
export const FriendSubscriptionDocument = gql`
	subscription FriendSubscription($id: ID!) {
		friendSubscription(id: $id) {
			node {
				id
				username
				friends {
					id
					username
					avatar_url {
						url
					}
				}
			}
		}
	}
`
export class FriendSubscriptionComponent extends React.Component<
	Partial<
		ReactApollo.SubscriptionProps<FriendSubscriptionSubscription, FriendSubscriptionVariables>
	>
> {
	render() {
		return (
			<ReactApollo.Subscription<FriendSubscriptionSubscription, FriendSubscriptionVariables>
				subscription={FriendSubscriptionDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type FriendSubscriptionProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<FriendSubscriptionSubscription, FriendSubscriptionVariables>
> &
	TChildProps
export function FriendSubscriptionHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				FriendSubscriptionSubscription,
				FriendSubscriptionVariables,
				FriendSubscriptionProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		FriendSubscriptionSubscription,
		FriendSubscriptionVariables,
		FriendSubscriptionProps<TChildProps>
	>(FriendSubscriptionDocument, operationOptions)
}
export const NotificationSubscriptionDocument = gql`
	subscription NotificationSubscription($id: ID!) {
		NotificationSubscription(id: $id) {
			node {
				id
				message
				comments {
					...MyCommentFragment
				}
				messages {
					id
					parentId
					body
					author {
						id
						username
						online
						avatar_url {
							url
						}
					}
					createdAt
					updatedAt
				}
				team {
					id
					slug
				}
				channel {
					id
					slug
				}
				friend_requests {
					...FriendFragment
					username
					createdAt
					updatedAt
				}
				friend {
					...FriendFragment
					username
					createdAt
					updatedAt
				}
			}
		}
	}

	${MyCommentFragmentFragmentDoc}
	${FriendFragmentFragmentDoc}
`
export class NotificationSubscriptionComponent extends React.Component<
	Partial<
		ReactApollo.SubscriptionProps<
			NotificationSubscriptionSubscription,
			NotificationSubscriptionVariables
		>
	>
> {
	render() {
		return (
			<ReactApollo.Subscription<
				NotificationSubscriptionSubscription,
				NotificationSubscriptionVariables
			>
				subscription={NotificationSubscriptionDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type NotificationSubscriptionProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<NotificationSubscriptionSubscription, NotificationSubscriptionVariables>
> &
	TChildProps
export function NotificationSubscriptionHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				NotificationSubscriptionSubscription,
				NotificationSubscriptionVariables,
				NotificationSubscriptionProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		NotificationSubscriptionSubscription,
		NotificationSubscriptionVariables,
		NotificationSubscriptionProps<TChildProps>
	>(NotificationSubscriptionDocument, operationOptions)
}
export const DeleteNotificationDocument = gql`
	mutation DeleteNotification($id: ID!) {
		deleteNotification(id: $id) {
			ok
			errors {
				path
				message
			}
		}
	}
`
export class DeleteNotificationComponent extends React.Component<
	Partial<ReactApollo.MutationProps<DeleteNotificationMutation, DeleteNotificationVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<DeleteNotificationMutation, DeleteNotificationVariables>
				mutation={DeleteNotificationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type DeleteNotificationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<DeleteNotificationMutation, DeleteNotificationVariables>
> &
	TChildProps
export type DeleteNotificationMutationFn = ReactApollo.MutationFn<
	DeleteNotificationMutation,
	DeleteNotificationVariables
>
export function DeleteNotificationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				DeleteNotificationMutation,
				DeleteNotificationVariables,
				DeleteNotificationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		DeleteNotificationMutation,
		DeleteNotificationVariables,
		DeleteNotificationProps<TChildProps>
	>(DeleteNotificationDocument, operationOptions)
}
export const FetchNotificationsDocument = gql`
	query FetchNotifications {
		fetchNotifications {
			id
			message
			comments {
				...MyCommentFragment
			}
			messages {
				id
				parentId
				body
				author {
					id
					username
					online
					avatar_url {
						url
					}
				}
				createdAt
				updatedAt
			}
			team {
				id
				slug
				createdAt
			}
			channel {
				id
				slug
				createdAt
			}
			friend_requests {
				id
				username
				avatar_url {
					url
				}
				createdAt
				updatedAt
			}
			friend {
				id
				username
				avatar_url {
					url
				}
				createdAt
				updatedAt
			}
		}
	}

	${MyCommentFragmentFragmentDoc}
`
export class FetchNotificationsComponent extends React.Component<
	Partial<ReactApollo.QueryProps<FetchNotificationsQuery, FetchNotificationsVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<FetchNotificationsQuery, FetchNotificationsVariables>
				query={FetchNotificationsDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type FetchNotificationsProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<FetchNotificationsQuery, FetchNotificationsVariables>
> &
	TChildProps
export function FetchNotificationsHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				FetchNotificationsQuery,
				FetchNotificationsVariables,
				FetchNotificationsProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		FetchNotificationsQuery,
		FetchNotificationsVariables,
		FetchNotificationsProps<TChildProps>
	>(FetchNotificationsDocument, operationOptions)
}
export const BlockOrUnblockUserDocument = gql`
	mutation BlockOrUnblockUser($id: ID!) {
		blockUser(id: $id) {
			id
			username
			avatar_url {
				url
			}
		}
	}
`
export class BlockOrUnblockUserComponent extends React.Component<
	Partial<ReactApollo.MutationProps<BlockOrUnblockUserMutation, BlockOrUnblockUserVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<BlockOrUnblockUserMutation, BlockOrUnblockUserVariables>
				mutation={BlockOrUnblockUserDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type BlockOrUnblockUserProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<BlockOrUnblockUserMutation, BlockOrUnblockUserVariables>
> &
	TChildProps
export type BlockOrUnblockUserMutationFn = ReactApollo.MutationFn<
	BlockOrUnblockUserMutation,
	BlockOrUnblockUserVariables
>
export function BlockOrUnblockUserHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				BlockOrUnblockUserMutation,
				BlockOrUnblockUserVariables,
				BlockOrUnblockUserProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		BlockOrUnblockUserMutation,
		BlockOrUnblockUserVariables,
		BlockOrUnblockUserProps<TChildProps>
	>(BlockOrUnblockUserDocument, operationOptions)
}
export const GetProfileQueryDocument = gql`
	query GetProfileQuery($username: String!) {
		getProfile(username: $username) {
			user {
				id
				username
				createdAt
				updatedAt
				private
				blockedUsers {
					username
					id
					avatar_url {
						url
					}
				}
				friends {
					...FriendFragment
				}
				avatar_url {
					url
				}
				friend_requests {
					...FriendFragment
				}
			}
			errors {
				message
				username
				avatar_url {
					url
				}
				error
			}
		}
	}

	${FriendFragmentFragmentDoc}
`
export class GetProfileQueryComponent extends React.Component<
	Partial<ReactApollo.QueryProps<GetProfileQueryQuery, GetProfileQueryVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<GetProfileQueryQuery, GetProfileQueryVariables>
				query={GetProfileQueryDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type GetProfileQueryProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<GetProfileQueryQuery, GetProfileQueryVariables>
> &
	TChildProps
export function GetProfileQueryHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				GetProfileQueryQuery,
				GetProfileQueryVariables,
				GetProfileQueryProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		GetProfileQueryQuery,
		GetProfileQueryVariables,
		GetProfileQueryProps<TChildProps>
	>(GetProfileQueryDocument, operationOptions)
}
export const FriendRequestMutationDocument = gql`
	mutation FriendRequestMutation($requestedId: ID!) {
		friendRequest(requestedId: $requestedId) {
			ok
			errors {
				path
				message
			}
		}
	}
`
export class FriendRequestMutationComponent extends React.Component<
	Partial<
		ReactApollo.MutationProps<FriendRequestMutationMutation, FriendRequestMutationVariables>
	>
> {
	render() {
		return (
			<ReactApollo.Mutation<FriendRequestMutationMutation, FriendRequestMutationVariables>
				mutation={FriendRequestMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type FriendRequestMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<FriendRequestMutationMutation, FriendRequestMutationVariables>
> &
	TChildProps
export type FriendRequestMutationMutationFn = ReactApollo.MutationFn<
	FriendRequestMutationMutation,
	FriendRequestMutationVariables
>
export function FriendRequestMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				FriendRequestMutationMutation,
				FriendRequestMutationVariables,
				FriendRequestMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		FriendRequestMutationMutation,
		FriendRequestMutationVariables,
		FriendRequestMutationProps<TChildProps>
	>(FriendRequestMutationDocument, operationOptions)
}
export const AddFriendMutationDocument = gql`
	mutation addFriendMutation($requestedId: ID!) {
		addFriend(requestedId: $requestedId) {
			user {
				...FriendFragment
			}
			ok
			errors {
				path
				message
			}
		}
	}

	${FriendFragmentFragmentDoc}
`
export class AddFriendMutationComponent extends React.Component<
	Partial<ReactApollo.MutationProps<AddFriendMutationMutation, AddFriendMutationVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<AddFriendMutationMutation, AddFriendMutationVariables>
				mutation={AddFriendMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type AddFriendMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<AddFriendMutationMutation, AddFriendMutationVariables>
> &
	TChildProps
export type AddFriendMutationMutationFn = ReactApollo.MutationFn<
	AddFriendMutationMutation,
	AddFriendMutationVariables
>
export function AddFriendMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				AddFriendMutationMutation,
				AddFriendMutationVariables,
				AddFriendMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		AddFriendMutationMutation,
		AddFriendMutationVariables,
		AddFriendMutationProps<TChildProps>
	>(AddFriendMutationDocument, operationOptions)
}
export const RejectFriendMutationDocument = gql`
	mutation RejectFriendMutation($id: ID!) {
		friendReject(id: $id) {
			ok
			errors {
				path
				message
			}
		}
	}
`
export class RejectFriendMutationComponent extends React.Component<
	Partial<ReactApollo.MutationProps<RejectFriendMutationMutation, RejectFriendMutationVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<RejectFriendMutationMutation, RejectFriendMutationVariables>
				mutation={RejectFriendMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type RejectFriendMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<RejectFriendMutationMutation, RejectFriendMutationVariables>
> &
	TChildProps
export type RejectFriendMutationMutationFn = ReactApollo.MutationFn<
	RejectFriendMutationMutation,
	RejectFriendMutationVariables
>
export function RejectFriendMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				RejectFriendMutationMutation,
				RejectFriendMutationVariables,
				RejectFriendMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		RejectFriendMutationMutation,
		RejectFriendMutationVariables,
		RejectFriendMutationProps<TChildProps>
	>(RejectFriendMutationDocument, operationOptions)
}
export const CreateTeamMutationDocument = gql`
	mutation CreateTeamMutation($name: String!) {
		createTeam(name: $name) {
			name
			id
			slug
			channels {
				slug
			}
		}
	}
`
export class CreateTeamMutationComponent extends React.Component<
	Partial<ReactApollo.MutationProps<CreateTeamMutationMutation, CreateTeamMutationVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<CreateTeamMutationMutation, CreateTeamMutationVariables>
				mutation={CreateTeamMutationDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CreateTeamMutationProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CreateTeamMutationMutation, CreateTeamMutationVariables>
> &
	TChildProps
export type CreateTeamMutationMutationFn = ReactApollo.MutationFn<
	CreateTeamMutationMutation,
	CreateTeamMutationVariables
>
export function CreateTeamMutationHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CreateTeamMutationMutation,
				CreateTeamMutationVariables,
				CreateTeamMutationProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CreateTeamMutationMutation,
		CreateTeamMutationVariables,
		CreateTeamMutationProps<TChildProps>
	>(CreateTeamMutationDocument, operationOptions)
}
export const SetProfilePrivacyDocument = gql`
	mutation SetProfilePrivacy($bool: Boolean!) {
		setProfilePrivacy(bool: $bool) {
			private
		}
	}
`
export class SetProfilePrivacyComponent extends React.Component<
	Partial<ReactApollo.MutationProps<SetProfilePrivacyMutation, SetProfilePrivacyVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<SetProfilePrivacyMutation, SetProfilePrivacyVariables>
				mutation={SetProfilePrivacyDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type SetProfilePrivacyProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<SetProfilePrivacyMutation, SetProfilePrivacyVariables>
> &
	TChildProps
export type SetProfilePrivacyMutationFn = ReactApollo.MutationFn<
	SetProfilePrivacyMutation,
	SetProfilePrivacyVariables
>
export function SetProfilePrivacyHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				SetProfilePrivacyMutation,
				SetProfilePrivacyVariables,
				SetProfilePrivacyProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		SetProfilePrivacyMutation,
		SetProfilePrivacyVariables,
		SetProfilePrivacyProps<TChildProps>
	>(SetProfilePrivacyDocument, operationOptions)
}
export const UnBlockUserDocument = gql`
	mutation UnBlockUser($id: ID!) {
		unblockUser(id: $id) {
			id
			username
			avatar_url {
				url
			}
		}
	}
`
export class UnBlockUserComponent extends React.Component<
	Partial<ReactApollo.MutationProps<UnBlockUserMutation, UnBlockUserVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<UnBlockUserMutation, UnBlockUserVariables>
				mutation={UnBlockUserDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type UnBlockUserProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<UnBlockUserMutation, UnBlockUserVariables>
> &
	TChildProps
export type UnBlockUserMutationFn = ReactApollo.MutationFn<
	UnBlockUserMutation,
	UnBlockUserVariables
>
export function UnBlockUserHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				UnBlockUserMutation,
				UnBlockUserVariables,
				UnBlockUserProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		UnBlockUserMutation,
		UnBlockUserVariables,
		UnBlockUserProps<TChildProps>
	>(UnBlockUserDocument, operationOptions)
}
export const UpdateProfileDocument = gql`
	mutation UpdateProfile(
		$username: String
		$oldPassword: String
		$newPassword: String
		$avatar: Upload!
	) {
		updateProfile(
			username: $username
			oldPassword: $oldPassword
			newPassword: $newPassword
			avatar: $avatar
		) {
			avatar {
				url
			}
			username
		}
	}
`
export class UpdateProfileComponent extends React.Component<
	Partial<ReactApollo.MutationProps<UpdateProfileMutation, UpdateProfileVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<UpdateProfileMutation, UpdateProfileVariables>
				mutation={UpdateProfileDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type UpdateProfileProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<UpdateProfileMutation, UpdateProfileVariables>
> &
	TChildProps
export type UpdateProfileMutationFn = ReactApollo.MutationFn<
	UpdateProfileMutation,
	UpdateProfileVariables
>
export function UpdateProfileHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				UpdateProfileMutation,
				UpdateProfileVariables,
				UpdateProfileProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		UpdateProfileMutation,
		UpdateProfileVariables,
		UpdateProfileProps<TChildProps>
	>(UpdateProfileDocument, operationOptions)
}
export const QueryUsersDocument = gql`
	query QueryUsers {
		queryUsers {
			username
			id
		}
	}
`
export class QueryUsersComponent extends React.Component<
	Partial<ReactApollo.QueryProps<QueryUsersQuery, QueryUsersVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<QueryUsersQuery, QueryUsersVariables>
				query={QueryUsersDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type QueryUsersProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<QueryUsersQuery, QueryUsersVariables>
> &
	TChildProps
export function QueryUsersHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				QueryUsersQuery,
				QueryUsersVariables,
				QueryUsersProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		QueryUsersQuery,
		QueryUsersVariables,
		QueryUsersProps<TChildProps>
	>(QueryUsersDocument, operationOptions)
}
export const ShowTeamsQueryDocument = gql`
	query ShowTeamsQuery($authorId: ID!) {
		showTeams(authorId: $authorId) {
			id
			slug
			name
			channels {
				slug
			}
		}
	}
`
export class ShowTeamsQueryComponent extends React.Component<
	Partial<ReactApollo.QueryProps<ShowTeamsQueryQuery, ShowTeamsQueryVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<ShowTeamsQueryQuery, ShowTeamsQueryVariables>
				query={ShowTeamsQueryDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type ShowTeamsQueryProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<ShowTeamsQueryQuery, ShowTeamsQueryVariables>
> &
	TChildProps
export function ShowTeamsQueryHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				ShowTeamsQueryQuery,
				ShowTeamsQueryVariables,
				ShowTeamsQueryProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		ShowTeamsQueryQuery,
		ShowTeamsQueryVariables,
		ShowTeamsQueryProps<TChildProps>
	>(ShowTeamsQueryDocument, operationOptions)
}
export const CurrentUserQueryDocument = gql`
	query CurrentUserQuery {
		currentUser {
			email
			id
			username
		}
	}
`
export class CurrentUserQueryComponent extends React.Component<
	Partial<ReactApollo.QueryProps<CurrentUserQueryQuery, CurrentUserQueryVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<CurrentUserQueryQuery, CurrentUserQueryVariables>
				query={CurrentUserQueryDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CurrentUserQueryProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<CurrentUserQueryQuery, CurrentUserQueryVariables>
> &
	TChildProps
export function CurrentUserQueryHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CurrentUserQueryQuery,
				CurrentUserQueryVariables,
				CurrentUserQueryProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CurrentUserQueryQuery,
		CurrentUserQueryVariables,
		CurrentUserQueryProps<TChildProps>
	>(CurrentUserQueryDocument, operationOptions)
}
