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

const pageTransitionTimeout=500;

class App extends React.Component {
	static propTypes={
		children: React.PropTypes.any
		, location: React.PropTypes.any
	}

	render() {
		let transitionName=this.props.location.action==="POP"?"animation-page-back":"animation-page";
		return (
			<span>
				<NavigationBar location={this.props.location}/>
				<ReactCSSTransitionGroup
					transitionName={transitionName}
					transitionEnterTimeout={pageTransitionTimeout}
					transitionLeaveTimeout={pageTransitionTimeout}>
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
			<IndexRoute getComponent={
				(location,callback)=>{
					require.ensure([],(require)=>{
						callback(null,require("pages/index.jsx").default);
					});
				}
			}></IndexRoute>
		</Route>
	</Router>
	, document.getElementById("root-view"));