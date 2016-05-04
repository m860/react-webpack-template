import {Link} from "react-router";
import PageLayout from "components/page-layout.jsx";

class Index extends React.Component {
	render() {
		return (
				<PageLayout>
					<h1>Index</h1>
					<ul>
						<li><Link to="/test">test index</Link></li>
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