import {Link} from "react-router";
import PageLayout from "components/page_layout.jsx";

class Hello extends React.Component {
	render() {
		return (
			<PageLayout>
				<h1>Page 2</h1>
				<Link to="/page1"> /page1 </Link>
			</PageLayout>
		);
	}
}
export default Hello;