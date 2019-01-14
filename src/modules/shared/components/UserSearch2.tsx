import * as React from 'react'
import Downshift from 'downshift'

import styled from 'styled-components'

import { QueryUsersComponent } from '../../../apollo/components/apollo-components'

const SearchLayout = styled.div`
	margin-top: 1rem;
`

const SearchList = styled.ul``

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

					console.log('USERS', users)

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
										<label {...getLabelProps()}>Search User</label>
										<input {...getInputProps()} />
										<SearchList {...getMenuProps()}>
											{isOpen
												? users
														.filter(
															(item: any) =>
																!inputValue ||
																item.value.includes(inputValue)
														)
														.map((item: any, index: any) => (
															<li
																{...getItemProps({
																	key: item.key,
																	index,
																	item,
																	style: {
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
															</li>
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
