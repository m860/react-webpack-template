import {Link} from "react-router";
import Page from "components/page.jsx";

class Hello extends React.Component {
	render() {
		return (
			<Page>
				<h1>Page 1</h1>
				<Link to="/page2"> /page2 </Link>
			</Page>
		);
	}
}
export default Hello;