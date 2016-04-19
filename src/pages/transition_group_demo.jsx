import ReactTransitionGroup from "react-addons-transition-group";

class Message extends React.Component {
	render() {
		return <p>react transition group demo.</p>
	}
	componentDidMount(){
		console.log("-1 did mount.");
	}
	componentWillAppear(callback) {
		console.log("0 will appear.");
		callback();
	}

	componentDidAppear() {
		console.log("1 did appear.");
	}

	componentWillEnter(callback) {
		console.log("2 will enter.");

		callback();
	}

	componentDidEnter() {
		console.log("3 did enter.");
	}

	componentWillLeave(callback) {
		console.log("4 will leave");
		callback();
	}

	componentDidLeave() {
		console.log("5 did leave");
	}
}

class TransitionGroupDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	render() {
		return (
			<div>
				<button onClick={
					()=>{
						let newValue=!this.state.show;
						this.setState({
							show:newValue
						});
					}
				}>Toggle Message</button>
				<ReactTransitionGroup>
					{this.state.show && <Message key="message"></Message>}
				</ReactTransitionGroup>
			</div>
		);
	}
}

export default TransitionGroupDemo;