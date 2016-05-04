import PageLayout from "components/page-layout.jsx";
import {Link} from "react-router";

export default class TestIndex extends React.Component {
	render() {
		return (
			<PageLayout>
				<p>Test Index</p>
				<ul>
					<li><Link to="/test/swipe-page-layout">swipe-page-layout</Link></li>
				</ul>
			</PageLayout>
		);
	}
}