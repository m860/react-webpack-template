import {Link} from "react-router";

class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Page 2</h1>
				<Link to="/page1"> /page1 </Link>
			</div>
		);
	}
}
export default Hello;