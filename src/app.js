require('normalize-css/normalize.css');
require('font-awesome/css/font-awesome.css');
require("./assets/sass/app.sass");
import {
	Router
	, Route
	, hashHistory
	, IndexRoute
} from "react-router";
import routes from './config/routes.config'
import config from "./config/app.config.js";

class App extends React.Component {
	static propTypes={
		children: React.PropTypes.any
		, location: React.PropTypes.any
	}

	render() {
		return (
			<div id="app">
				{/*<NavigationBar location={this.props.location} {...appConfig.navigationBar}/>*/}
				<ReactCSSTransitionGroup
					transitionName={config.getTransitionName(this.props.location)}
					transitionEnterTimeout={config.transitionTimeout}
					transitionLeaveTimeout={config.transitionTimeout}>
					{
						React.cloneElement(this.props.children, {
							key: this.props.location.pathname
						})
					}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/"
			   childRoutes={routes}
			   component={App} >
			<IndexRoute {...config.indexRoute}></IndexRoute>
		</Route>
	</Router>
	, document.getElementById("view"));