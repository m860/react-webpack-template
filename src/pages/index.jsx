import {Link} from "react-router";

class Index extends React.Component {
	render() {
		return (
				<div>
					<h1>Index</h1>
					<ul>
						<li><Link to="/page1">/page1</Link></li>
						<li><Link to="/page2">/page2</Link></li>
						<li><Link to="animation">/animation</Link></li>
						<li><Link to="/notfound">/404</Link></li>
					</ul>
				</div>
		);
	}

	static get propTypes() {
		return {
			children: React.PropTypes.any
		};
	}
	
}

export default Index;