import BaseComponent from "../utility/baseComponent.jsx";

/**
 * Navigator
 * @class
 *
 * @param {object} backButton - back button options
 * @param {string} button.text
 * @param {string} button.className
 * @param {function} button.click
 *
 * location.state
 * @param {object} location.state.leftButton
 * @param {string|function} location.state.title
 * @param {object} location.state.rightButton
 * @param {boolean} location.state.hideNavigator=false
 *
 * button (leftButton & rightButton)
 * @param {string} button.text
 * @param {string} button.className
 * @param {function} button.click
 * */
export default class Navigator extends BaseComponent {

	static propTypes = {
		children: React.PropTypes.any,
		location: React.PropTypes.object.isRequired,
		backButton:React.PropTypes.object
	}
	static defaultProps = {
		location: {
			state: {
				leftButton: [],
				title: "",
				rightButton: [],
				hideNavigator: false
			}
		},
		backButton:{
			text:"back",
			className:"back-button",
			click(location,router){
				router.pop();
			}
		}
	};

	get locationState(){
		return this.props.location.state;
	}

	get leftButton(){
		if(this.locationState && this.locationState.leftButton){
			return this.locationState.leftButton;
		}
		if(this.props.location.pathname!=="/"){
			return [this.props.backButton];
		}
		return [];
	}

	get rightButton(){
		if(this.locationState && this.locationState.rightButton){
			return this.locationState.rightButton;
		}
		return [];
	}

	get title(){
		if(this.locationState && this.locationState.title){
			return this.locationState.title;
		}
		return "";
	}

	render() {
		console.log(this.props.location.state);
		console.log(this.context.router);
		if (this.props.location.state
			&& this.props.location.state.hideNavigator) {
			return null;
		}

		return (
			<div className="navigator">
				<div
					className="left">{this.leftButton.map((item,index)=>{
					return <button
						key={index}
						className={item.className}
						onClick={event=> {
							item.click(event, this.props.location, this.context.router);
						}}>{item.text}</button>
				})}</div>
				<div className="title">{this.title}</div>
				<div
					className="right">{this.rightButton.map((item,index)=>{
					return <button
						key={index}
						className={item.className}
						onClick={event=> {
							item.click(event, this.props.location, this.context.router);
						}}>{item.text}</button>
				})}</div>
			</div>
		);
	}
}
