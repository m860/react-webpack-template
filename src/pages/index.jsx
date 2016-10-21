import {Link} from "react-router";
import Layout from "../components/layout.jsx";
import BasePage from "../utility/basePage.jsx";
require("../assets/sass/index.sass");

const styles = {
	link: {
		display: "block"
	}
};

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
					}}>hide navigator
				</button>
				<button
					onClick={event=> {
						this.context.router.replace({
							path: this.props.location.pathname,
							state: Object.assign({}, this.props.location.state, {
								leftButton: [{
									text: " < back",
									className: "back-button",
									click: ()=> {

									}
								}]
							})
						});
					}}>add left button
				</button>
				<button
					onClick={event=> {
						this.context.router.replace({
							path: this.props.location.pathname,
							state: Object.assign({}, this.props.location.state, {
								rightButton: [{
									text: "setting",
									className: "right-button",
									click: ()=> {

									}
								}]
							})
						});
					}}>add right button
				</button>
				<button
					onClick={event=> {
						this.context.router.replace({
							path: this.props.location.pathname,
							state: Object.assign({}, this.props.location.state, {
								rightButton: [],
								leftButton: []
							})
						});
					}}>clear navigation buttons
				</button>
				<div className="test-pages">
					<Link
						to={{
							pathname: "/test/restful-client",
							state: {
								title: "Test RESTful Client"
							}
						}}>Test RESTful Client</Link>
				</div>
			</Layout>
		);
	}
}

export default Index;