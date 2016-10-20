import {Link} from "react-router";
import Layout from "../components/layout.jsx";
import BasePage from "../utility/basePage.jsx";

class Index extends BasePage {

	// constructor(props){
	// 	super(props);
	// 	this.locationState={};
	// }

	static propTypes = {
		children: React.PropTypes.any
	};

	render() {
		return (
			<Layout>
				<button
					onClick={event=> {
						this.context.router.replace({
							path: this.props.location.pathname,
							state: Object.assign({}, this.props.location.state, {
								title: "Hello"
							})
						});

					}}>set navigation title to "Hello"
				</button>
				<button
					onClick={event=> {
						this.context.router.replace({
							path: this.props.location.pathname,
							state: Object.assign({}, this.props.location.state, {
								hideNavigationBar: false
							})
						})
					}}>show navigator
				</button>
				<button
					onClick={event=> {
						this.context.router.replace({
							path: this.props.location.pathname,
							state: Object.assign({}, this.props.location.state, {
								hideNavigationBar: true
							})
						})
					}}>hide navigator</button>
				<button
					onClick={event=> {
						this.context.router.replace({
							path: this.props.location.pathname,
							state: Object.assign({}, this.props.location.state, {
								leftButton:[{
									text:"back",
									className:"",
									click:()=>{

									}
								}]
							})
						});
					}}>add left button</button>
				<button>add right button</button>
			</Layout>
		);
	}
}

export default Index;