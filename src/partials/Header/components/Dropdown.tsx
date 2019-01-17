import * as React from 'react'
import { Icon } from 'semantic-ui-react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'

import { DropDownButton, DropDownContent } from '../styles'

interface IProps {
	navItem: any
	history: any
}

interface IState {
	open: boolean
}

class DropDown extends React.PureComponent<IProps, IState> {
	state = {
		open: false
	}

	componentDidMount(): void {
		const app: HTMLElement | null = document.querySelector('#root')

		if (app) {
			app.addEventListener('click', () => {
				this.setState({ open: false })
			})
		}
	}

	_openMenu = () => {
		this.setState({ open: !this.state.open })
	}

	// _changePage = (link: string) => {
	// 	console.log('HISTORY')
	// 	if (this.props.history) {
	// 		this.props.history.push(link)
	// 	}
	// }

	render() {
		const { navItem } = this.props

		return (
			<React.Fragment>
				<DropDownButton onClick={this._openMenu}>
					<Icon name={navItem.icon} className="dropDown-button" />
				</DropDownButton>
				{this.state.open ? (
					<DropDownContent className="dropdown-content">
						{navItem.children.map((child: any) => {
							return (
								<Link
									to={child.link}
									// onClick={() =>
									// 	this._changePage(child.link)
									// }
								>
									{/* <Icon type={child.icon} /> */}
									{/* <span style={{ marginLeft: '0.4rem' }}> */}
									{child.text}
									{/* </span> */}
								</Link>
							)
						})}
					</DropDownContent>
				) : null}
			</React.Fragment>
		)
	}
}

export default withRouter<RouteComponentProps<{}> & IProps>(DropDown as any)
