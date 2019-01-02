import * as React from 'react'
// import Downshift from 'downshift'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Dropdown, Button } from 'semantic-ui-react'
import { DataProps, compose } from 'react-apollo'
import { USER_SEARCH } from '../graphql/server'
import { IUser } from '../../../types'

import { QueryUsersHOC, QueryUsersQueryUsers } from '../../../apollo/components/apollo-components'

// const items: any[] = []

interface IHistory {
	push: any
}

interface IProps extends Partial<RouteComponentProps<IHistory>> {
	queryUsers: QueryUsersQueryUsers[]
	history: any
	mutate?: (variables: {}) => void
	currentUser: IUser
}

interface IState {
	value: any
	submit: boolean
}

class UserSearch extends React.Component<DataProps<IProps, IState> & IProps> {
	state = {
		value: '',
		submit: false
	}

	_handleChange = async (_: any, { value }: any) => {
		this.setState({ value })
	}

	_handleClick = async () => {
		if (this.props.mutate !== undefined) {
			this.props.mutate({
				variables: {}
			})
		}
		this.props.history.push(`/profile/${this.state.value}`)
	}

	render() {
		const { value } = this.state
		const {
			data: { queryUsers },
			currentUser
		} = this.props

		let users

		if (queryUsers !== undefined) {
			users = queryUsers
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

		return (
			<React.Fragment>
				<div style={{ marginTop: '1rem' }}>
					<Dropdown
						onChange={this._handleChange}
						placeholder="Search Users"
						fluid
						search
						selection
						options={users}
					/>
					{value !== '' ? <Button onClick={this._handleClick}>{value}</Button> : null}
				</div>
			</React.Fragment>

			// <Downshift
			// 	onChange={selection => alert(`You selected ${selection.value}`)}
			// 	itemToString={(item: any) => (item ? item.value : '')}
			// >
			// 	{({
			// 		getInputProps,
			// 		getItemProps,
			// 		getLabelProps,
			// 		getMenuProps,
			// 		isOpen,
			// 		inputValue,
			// 		highlightedIndex,
			// 		selectedItem
			// 	}) => (
			// 		<div>
			// 			<label {...getLabelProps()}>Enter a fruit</label>
			// 			<input {...getInputProps()} />
			// 			<ul {...getMenuProps()}>
			// 				{isOpen
			// 					? this.props.data.queryUsers
			// 							.filter(
			// 								(item: any) =>
			// 									!inputValue ||
			// 									item.username.includes(
			// 										inputValue
			// 									)
			// 							)
			// 							.map((item: any, index: any) => (
			// 								<li
			// 									{...getItemProps({
			// 										key: item.id,
			// 										index,
			// 										item,
			// 										style: {
			// 											backgroundColor:
			// 												highlightedIndex ===
			// 												index
			// 													? 'lightgray'
			// 													: 'white',
			// 											fontWeight:
			// 												selectedItem ===
			// 												item
			// 													? 'bold'
			// 													: 'normal'
			// 										}
			// 									})}
			// 								>
			// 									{item.username}
			// 								</li>
			// 							))
			// 					: null}
			// 			</ul>
			// 		</div>
			// 	)}
			// </Downshift>
		)
	}
}

export default compose(
	withRouter,
	QueryUsersHOC<IProps>(USER_SEARCH)
)(UserSearch)
