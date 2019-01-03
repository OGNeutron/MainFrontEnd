import * as React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { Icon, Popup } from 'semantic-ui-react'
import DropDown from './components/Dropdown'

import {
	// DropDownButton,
	NavItem,
	// DropDownContent,
	MainNav,
	NavBrandIcon,
	NavBrand
} from './styles'
import { Badge } from 'antd'

interface IState {
	open: boolean
}

interface INavItem {
	link: string
	tooltip?: string
	icon: any
	text: string
	auth: boolean
	onClickEvent?: any
	dropdown?: boolean
	children?: INavItem[]
	component?: any
	count?: number
	badge?: boolean
}

interface INavBrand {
	title: string
	icon: any
}

interface IProps {
	sidePanel: boolean
	navItems: INavItem[]
	navBrand: INavBrand
	authorised: boolean
}

class HeaderBar extends React.Component<IProps & RouteComponentProps<{}>, IState> {
	state = {
		open: false
	}

	_openSide = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	render() {
		const {
			sidePanel,
			navItems,
			navBrand,
			authorised,
			location: { pathname }
		} = this.props

		const { open } = this.state

		return (
			<MainNav open={open && sidePanel}>
				{navBrand.title && (
					<NavBrand>
						<Link to="/">{navBrand.title}</Link>
					</NavBrand>
				)}
				<NavBrandIcon onClick={this._openSide}>
					{open ? <Icon name="arrow left" /> : <Icon name="arrow right" />}
				</NavBrandIcon>
				{navItems.map((navItem: INavItem, i: number) => {
					const icon =
						navItem.badge === true ? (
							<Badge count={1}>
								<Icon
									style={{
										color: navItem.link === pathname ? '#7b97fc' : 'black'
									}}
									name={navItem.icon}
								/>
							</Badge>
						) : (
							<Icon
								style={{
									color: navItem.link === pathname ? '#7b97fc' : 'black'
								}}
								name={navItem.icon}
							/>
						)

					return (
						<React.Fragment key={i}>
							{navItem.auth === authorised && (
								<NavItem>
									{navItem.onClickEvent ? (
										<Link onClick={navItem.onClickEvent} to={navItem.link}>
											<Popup trigger={icon} content={navItem.tooltip} />
										</Link>
									) : (
										<React.Fragment>
											{navItem.children ? (
												<Popup
													trigger={<DropDown navItem={navItem} />}
													content={navItem.tooltip}
												/>
											) : (
												<Link to={navItem.link}>
													<Popup
														trigger={
															<Icon
																style={{
																	color:
																		navItem.link === pathname
																			? '#7b97fc'
																			: 'black'
																}}
																name={navItem.icon}
															/>
														}
														content={navItem.tooltip}
													/>
												</Link>
											)}
										</React.Fragment>
									)}
								</NavItem>
							)}
						</React.Fragment>
					)
				})}
			</MainNav>
		)
	}
}

export default withRouter<IProps & RouteComponentProps<{}>>(HeaderBar)
