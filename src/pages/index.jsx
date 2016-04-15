import {Link} from "react-router";

class Index extends React.Component {
	render() {
		return (
			<div>
				<h1>Index</h1>
				<ul>
					<li><Link to="hello">/hello</Link></li>
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

	static get defaultProps() {
		return {
			children: "index"
		};
	}
}

export default Index;