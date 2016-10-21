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
export default class NavigationBar extends BaseComponent {

	static propTypes = {
		children: React.PropTypes.any,
		location: React.PropTypes.object.isRequired,
		backButton:React.PropTypes.object,
		classNames:React.PropTypes.shape({
			navigationBar:React.PropTypes.string,
			left:React.PropTypes.string,
			title:React.PropTypes.string,
			right:React.PropTypes.string
		})
	}
	static defaultProps = {
		location: {
			state: {
				leftButton: [],
				title: "",
				rightButton: [],
				hideNavigationBar: false
			}
		},
		backButton:{
			text:"back",
			className:"back-button",
			click(event,location,router){
				router.goBack();
			}
		},
		classNames:{
			navigationBar:"navigation-bar",
			left:"navigation-bar-left",
			title:"navigation-bar-title",
			right:"navigation-bar-right",
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
		if (this.props.location.state
			&& this.props.location.state.hideNavigationBar) {
			return null;
		}

		return (
			<div className={this.props.classNames.navigationBar}>
				<div
					className={this.props.classNames.left}>{this.leftButton.map((item,index)=>{
					return <button
						key={index}
						className={item.className}
						onClick={event=> {
							item.click(event, this.props.location, this.context.router);
						}}>{item.text}</button>
				})}</div>
				<div className={this.props.classNames.title}>{this.title}</div>
				<div
					className={this.props.classNames.right}>{this.rightButton.map((item,index)=>{
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
