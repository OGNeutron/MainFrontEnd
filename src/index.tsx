import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'

// import 'semantic-ui-css/semantic.css'
import registerServiceWorker from './registerServiceWorker'
import MainLayout from './MainLayout'
import ApolloClient from './apollo'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
	<ApolloProvider client={ApolloClient}>
		<Router>
			<MainLayout />
		</Router>
	</ApolloProvider>,
	document.getElementById('root') as HTMLElement
)
registerServiceWorker()
