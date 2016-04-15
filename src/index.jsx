require("bower/normalize-css/normalize.css");
require("assets/sass/common.sass");
/* # static route */

// import {Router,Route,browserHistory} from "react-router";
// import {Index,Hello,NoMatch} from "pages/main.jsx"
//
// ReactDom.render(
//     <Router history={browserHistory}>
// 			<Route path="/" component={Index}>
// 				<Route path="/hello" component={Hello}></Route>
// 				<Route path="*" component={NoMatch}></Route>
// 			</Route>
// 		</Router>
//     , document.getElementById("view"));


/* # dynamic route */
// import {Router, browserHistory} from "react-router";
import {Router, hashHistory} from "react-router";

hashHistory.listen((location)=>{
	console.log("hash history change : ",location);
});

// hashHistory.listenBefore((location)=>{
// 	console.log("leaving page : ",location);
// });



const routes = {
	component:"div"
	,getChildRoutes(location,callback){
		require.ensure([],(require)=>{
			callback(null,[
				require("routes/index.jsx").default
			]);
		});
	}
};

ReactDom.render(
	<Router history={hashHistory} routes={routes}></Router>
	, document.getElementById("root-view"));