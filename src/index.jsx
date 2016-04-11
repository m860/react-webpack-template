require("bower/normalize-css/normalize.css");

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