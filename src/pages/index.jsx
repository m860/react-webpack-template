import {Link} from "react-router";
import Page from "components/page.jsx";

class Index extends React.Component {
	render() {
		return (
			<Page>
				<div>
					<h1>Index</h1>
					<ul>
						<li><Link to="/page1">/page1</Link></li>
						<li><Link to="/page2">/page2</Link></li>
						<li><Link to="animation">/animation</Link></li>
						<li><Link to="/notfound">/404</Link></li>
					</ul>
				</div>
			</Page>
		);
	}

	static get propTypes() {
		return {
			children: React.PropTypes.any
		};
	}
	
}

export default Index;