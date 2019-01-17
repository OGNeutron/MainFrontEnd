import * as React from 'react'
import Downshift from 'downshift'

import styled, { css } from 'styled-components'

import { QueryUsersComponent } from '../../../apollo/components/apollo-components'

const SearchLayout = styled.div`
	margin-top: 1rem;
`

const SearchList = styled.ul`
	margin-top: 1rem;
	padding: 0.5rem 0;
	/* border: 1px solid lightgrey; */
`

interface SearchItemProps {
	highlighted: boolean
	selected: boolean
}

const SearchItem = styled.li<SearchItemProps>`
	${({ highlighted, selected }) => {
		if (highlighted) {
			return css`
				background: mistyrose;
			`
		}
		if (selected) {
			return css`
				background: linen;
			`
		}
	}};
	padding: 5px;
	list-style: none;
	text-decoration: none;
`

// const items: any[] = []

interface IProps {
	onChange: any
	itemToString?: (item: any) => string
	currentUser: any
}

class UserSearch extends React.Component<IProps> {
	render() {
		const { onChange, currentUser } = this.props

		return (
			<QueryUsersComponent>
				{({ data, loading }) => {
					let users

					if (
						data !== undefined &&
						data.queryUsers !== undefined &&
						data.queryUsers !== null
					) {
						users = data.queryUsers
							.filter(user => user.id !== currentUser.id)
							.map((user: any) => {
								return {
									key: user.id,
									value: user.username,
									text: user.username
								}
							})
					} else {
						users = []
					}

					return loading === false ? (
						<SearchLayout>
							<Downshift
								onChange={onChange}
								itemToString={(item: any) => (item ? item.value : '')}
							>
								{({
									getInputProps,
									getItemProps,
									getLabelProps,
									getMenuProps,
									isOpen,
									inputValue,
									highlightedIndex,
									selectedItem
								}) => (
									<div>
										<label
											{...getLabelProps()}
											style={{ display: 'block', color: 'black' }}
										>
											Search User
										</label>
										<input
											{...getInputProps({
												style: {
													width: '100%',
													borderRadius: '5px',
													padding: '0.5rem',
													outline: 'none',
													boxShadow: 'none',
													border: '1px solid rgba(34,36,38,.15)'
												}
											})}
										/>
										<SearchList {...getMenuProps()}>
											{isOpen
												? users
														.filter(
															(item: any) =>
																!inputValue ||
																item.value.includes(inputValue)
														)
														.map((item: any, index: any) => (
															<SearchItem
																style={{
																	zIndex: '100',
																	color: 'black'
																}}
																selected={selectedItem === item}
																highlighted={
																	highlightedIndex === index
																}
																{...getItemProps({
																	key: item.key,
																	index,
																	item,
																	style: {
																		listStyle: 'none',
																		color: 'black',

																		backgroundColor:
																			highlightedIndex ===
																			index
																				? 'lightgray'
																				: 'white',
																		fontWeight:
																			selectedItem === item
																				? 'bold'
																				: 'normal'
																	}
																})}
															>
																{item.value}
															</SearchItem>
														))
												: null}
										</SearchList>
									</div>
								)}
							</Downshift>
						</SearchLayout>
					) : null
				}}
			</QueryUsersComponent>
		)
	}
}

export default UserSearch
