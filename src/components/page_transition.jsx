require("assets/sass/page-transition.sass");


//ReactCSSTransitionGroup
class PageTransition extends React.Component {
	constructor(props){
		super(props);
		this.enterTimeout=500;
		this.leaveTimeout=500;
		this.appearTimeout=500;
	}
	render() {
		return (
			<ReactCSSTransitionGroup transitionName="page"
									 transitionAppear={true}
									 transitionAppearTimeout={this.appearTimeout}
									 transitionEnterTimeout={this.enterTimeout}
									 transitionLeaveTimeout={this.leaveTimeout}>
				{this.props.children}
			</ReactCSSTransitionGroup>
		);
	}

	static get propTypes() {
		return {
			children: React.PropTypes.any
		};
	}
}

// import ReactTransitionGroup from "react-addons-transition-group";
// //ReactTransitionGroup
// class PageTransitionContent extends React.Component {
// 	// componentWillAppear() {
// 	// 	console.log("0 will appear.");
// 	// }
// 	//
// 	// componentDidAppear() {
// 	// 	console.log("1 did appear.");
// 	// }
//
// 	componentWillEnter(callback) {
// 		console.log("2 will enter.");
// 		callback();
// 	}
//
// 	componentDidEnter() {
// 		console.log("3 did enter.");
// 	}
//
// 	componentWillLeave(callback) {
// 		console.log("4 will leave");
// 		callback();
// 	}
//
// 	componentDidLeave() {
// 		console.log("5 did leave");
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
//
// 	static get propTypes() {
// 		return {
// 			children: React.PropTypes.any
// 		};
// 	}
// }
// class PageTransition extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			show:false
// 		};
// 		setTimeout(()=>{
// 			this.setState({
// 				show:true
// 			});
// 		},1);
// 	}
// 	render() {
// 		let content=this.state.show?
// 			<PageTransitionContent key="content">
// 				{this.props.children}
// 			</PageTransitionContent>:null;
// 		return (
// 			<ReactTransitionGroup>
// 				{content}
// 			</ReactTransitionGroup>
// 		);
// 	}
//
// 	static get propTypes() {
// 		return {
// 			children: React.PropTypes.any
// 		};
// 	}
// }

export default PageTransition;