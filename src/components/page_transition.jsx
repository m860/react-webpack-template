require("assets/sass/page-transition.sass");


//ReactCSSTransitionGroup
// class PageTransition extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.enterTimeout=500;
// 		this.leaveTimeout=500;
// 		this.appearTimeout=500;
// 	}
// 	componentWillAppear(){
// 		console.log("0 will appear.");
// 	}
// 	componentDidAppear(){
// 		console.log("1 did appear.");
// 	}
// 	componentWillEnter(){
// 		console.log("2 will enter.");
// 	}
// 	componentDidEnter(){
// 		console.log("3 did enter.");
// 	}
// 	componentWillLeave(){
// 		console.log("4 will leave");
// 	}
// 	componentDidLeave(){
// 		console.log("5 did leave");
// 	}
// 	render() {
// 		return (
// 			<ReactCSSTransitionGroup transitionName="page"
// 									 transitionAppear={true}
// 									 transitionAppearTimeout={this.appearTimeout}
// 									 transitionEnterTimeout={this.enterTimeout}
// 									 transitionLeaveTimeout={this.leaveTimeout}>
// 				{this.props.children}
// 			</ReactCSSTransitionGroup>
// 		);
// 	}
//
// 	static get propTypes() {
// 		return {
// 			children: React.PropTypes.any
// 		};
// 	}
// }

import ReactTransitionGroup from "react-addons-transition-group";
//ReactTransitionGroup
class PageTransitionContent extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}

	static get propTypes() {
		return {
			children: React.PropTypes.any
		};
	}
}
class PageTransition extends React.Component {

	componentWillAppear() {
		console.log("0 will appear.");
	}

	componentDidAppear() {
		console.log("1 did appear.");
	}

	componentWillEnter() {
		console.log("2 will enter.");
	}

	componentDidEnter() {
		console.log("3 did enter.");
	}

	componentWillLeave() {
		console.log("4 will leave");
	}

	componentDidLeave() {
		console.log("5 did leave");
	}

	render() {
		return (
			<ReactTransitionGroup component="PageTransitionContent">
				<PageTransitionContent key="content">
					{this.props.children}
				</PageTransitionContent>
			</ReactTransitionGroup>
		);
	}

	static get propTypes() {
		return {
			children: React.PropTypes.any
		};
	}
}

export default PageTransition;