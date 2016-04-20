import {Link} from "react-router";
import PageTransition from "components/page_transition.jsx";

class Hello extends React.Component {
	componentWillAppear(){
		console.log("0 will appear...");
	}
	render() {
		return (
			<PageTransition>
				<div>
					<Link to="/">go index</Link>
				</div>
			</PageTransition>
		);
	}
}
export default Hello;