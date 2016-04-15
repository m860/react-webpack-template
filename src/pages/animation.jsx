require("assets/sass/animation-example.sass");
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Animation extends React.Component{
	render(){
		return (
			<div>
				<p><button>toggle</button></p>
				<ReactCSSTransitionGroup transitionName="example"
										 transitionEnterTimeout={2000}
										 transitionLeaveTimeout={2000}>
					<p key="1">I am animation!</p>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
export default Animation;