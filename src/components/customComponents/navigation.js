import BaseComponent from "../baseComponent.js"

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
export default class Navigation extends BaseComponent {
	static propTypes = {
		title:React.PropTypes.string.isRequired,
		renderLeftButton:React.PropTypes.func,
		renderRightButton:React.PropTypes.func
	}
	static defaultProps = {
		renderLeftButton: ()=>{
			return(
				<button onClick={event=>{
					window.history.back();
				}}>Back</button>
			);
		},
		renderRightButton: ()=>null
	}

	render() {
		return (
			<div className="navigation">
				<div className="navigation-left-button">{this.props.renderLeftButton()}</div>
				<div className="navigation-title">{this.props.title}</div>
				<div className="navigation-right-button">{this.props.renderRightButton()}</div>
			</div>
		);
	}
}
