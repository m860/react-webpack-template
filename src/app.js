require('normalize-css/normalize.css');
require('font-awesome/css/font-awesome.css');
require("assets/sass/core.sass");
import {
	Router
	, Route
	, hashHistory
	, IndexRoute
} from "react-router";
// import routes from "routes/index.route.jsx";
import routes from 'routes'
import NavigationBar from "./components/customComponents/navigationBar.js";
import appConfig from "./config/app.config.js";

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
					transitionName={appConfig.getTransitionName(this.props.location)}
					transitionEnterTimeout={appConfig.transitionTimeout}
					transitionLeaveTimeout={appConfig.transitionTimeout}>
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
			<IndexRoute {...appConfig.indexRoute}></IndexRoute>
		</Route>
	</Router>
	, document.getElementById("view"));