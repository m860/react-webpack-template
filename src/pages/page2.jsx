import {Link} from "react-router";
import Page from "components/page.jsx";

class Hello extends React.Component {
	render() {
		return (
			<Page>
				<h1>Page 2</h1>
				<Link to="/page1"> /page1 </Link>
			</Page>
		);
	}
}
export default Hello;