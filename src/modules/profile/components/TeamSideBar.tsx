import * as React from 'react'
import { graphql, DataProps, compose } from 'react-apollo'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Spinner } from '../../../utils/components/animations/loader'

import { SHOW_TEAMS_QUERY } from '../../../utils/graphql/server'
import { checkLoading } from '../../../utils/recompose'

interface IState {
	visible: boolean
}

interface IProps {
	userId: string
	showTeams: any[]
}

class TeamSideBar extends React.PureComponent<DataProps<IProps, IState>> {
	state = {
		visible: false
	}

	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	render() {
		return (
			<React.Fragment>
				<Button onClick={this.toggleVisibility}>Chat Teams</Button>
				<Drawer anchor="right" open={this.state.visible} onClose={this.toggleVisibility}>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleVisibility}
						onKeyDown={this.toggleVisibility}
					>
						<List component="nav">
							<ListItem>
								<ListItemText primary={'Teams'} />
							</ListItem>
							<Divider />
							{this.props.data.showTeams
								? this.props.data.showTeams.map(team => {
										return (
											<ListItem key={team.id}>
												<Link
													to={`/chat-app/${team.slug}/${
														team.channels[0].slug
													}`}
												>
													<ListItemText primary={team.name} />
												</Link>
											</ListItem>
										)
								  })
								: null}
						</List>
					</div>
				</Drawer>
			</React.Fragment>
		)
	}
}

export default compose(
	graphql<IProps>(SHOW_TEAMS_QUERY, {
		options: props => ({ variables: { authorId: props.userId } })
	}),
	checkLoading((props: any) => {
		return props.data.loading
	}, Spinner)
)(TeamSideBar as any)
