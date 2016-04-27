import {Link} from "react-router";
import PageLayout from "components/page-layout.jsx";

class Index extends React.Component {
	render() {
		return (
				<PageLayout>
					<h1>Index</h1>
					<ul>
						<li><Link to="/page1">/page1</Link></li>
						<li><Link to="/page2">/page2</Link></li>
						<li><Link to="animation">/animation</Link></li>
						<li><Link to="/test-swipe-page-layout">/test-swipe-page-layout</Link></li>
						<li><Link to="/notfound">/404</Link></li>
					</ul>
				</PageLayout>
		);
	}

	static get propTypes() {
		return {
			children: React.PropTypes.any
		};
	}
	
}

export default Index;