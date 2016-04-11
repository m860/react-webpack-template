require("bower/normalize-css/normalize.css");

/* # static route */

import {Router,Route,browserHistory} from "react-router";
import {Index,Hello,NoMatch} from "pages/main.jsx"

ReactDom.render(
    <Router history={browserHistory}>
			<Route path="/" component={Index}>
				<Route path="/hello" component={Hello}></Route>
				<Route path="*" component={NoMatch}></Route>
			</Route>
		</Router>
    , document.getElementById("view"));


/* # dynamic route */
// import {Router, browserHistory} from "react-router";
//
// const root = {
// 	path:"/"
// 	,getIndexRoute(location,callback){
// 		require.ensure([],(require)=>{
// 			callback(null,{
// 				component:require("pages/index.jsx")
// 			});
// 		});
// 	}
// 	,
// };
//
// ReactDom.render(
// 	<Router history={browserHistory} routes={root}></Router>
// 	, document.getElementById("view"));