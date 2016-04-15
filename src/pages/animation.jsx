require("assets/sass/animation-example.sass");
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Animation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ['hello', 'world', 'click', 'me']
		};
	}

	handleRemove(i) {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({items: newItems});
	}

	render() {
		let items = this.state.items.map((item, i)=>
			<div key={item} onClick={this.handleRemove.bind(this, i)}>
				{item}
			</div>
		);
		return (
			<div>
				<button onClick={
				()=>{
					let newItems =this.state.items.concat([prompt('Enter some text')]);
					this.setState({items: newItems});
				}
				}>Add Item
				</button>
				<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500}
										 transitionLeaveTimeout={300}>
					{items}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
export default Animation;