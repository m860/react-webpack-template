require("bower/normalize-css/normalize.css");
require("bower/font-awesome/css/font-awesome.css");
require("assets/sass/common.sass");
import {
	Router
	, Route
	, hashHistory
	, IndexRoute
} from "react-router";
import routes from "routes/index.route.jsx";
import NavigationBar from "./components/navigationBar.jsx";
import appConfig from "./config/app.config.jsx";

class App extends React.Component {
	static propTypes={
		children: React.PropTypes.any
		, location: React.PropTypes.any
	}

	render() {
		return (
			<span>
				<NavigationBar location={this.props.location} {...appConfig.navigationBar}/>
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
			</span>
		);
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} getChildRoutes={routes}>
			<IndexRoute {...appConfig.indexRoute}></IndexRoute>
		</Route>
	</Router>
	, document.getElementById("root-view"));