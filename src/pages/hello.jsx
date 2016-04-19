import {Link} from "react-router";
import PageTransition from "components/page_transition.jsx";

class Hello extends React.Component {
	componentWillAppear(){
		console.log("0 will appear.");
	}
	componentDidAppear(){
		console.log("1 did appear.");
	}
	componentWillEnter(){
		console.log("2 will enter.");
	}
	componentDidEnter(){
		console.log("3 did enter.");
	}
	componentWillLeave(){
		console.log("4 will leave");
	}
	componentDidLeave(){
		console.log("5 did leave");
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