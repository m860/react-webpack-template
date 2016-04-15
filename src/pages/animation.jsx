require("assets/sass/animation-example.sass");
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Animation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ['hello', 'world', 'click', 'me']
			,showMessage:false
		};
	}

	handleRemove(i) {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({items: newItems});
	}

	handleAdd(){
		let newItems =this.state.items.concat([prompt('Enter some text')]);
		this.setState({items: newItems});
	}

	render() {
		let items = this.state.items.map((item, i)=>
			<div key={item} onClick={this.handleRemove.bind(this, i)}>
				{item}
			</div>
		);
		let messge=this.state.showMessage?<p>message</p>:null;
		return (
			<div>
				<button onClick={this.handleAdd.bind(this)}>Add Item</button>
				<ReactCSSTransitionGroup transitionName="example"
										 transitionEnterTimeout={500}
										 transitionLeaveTimeout={300}>
					{items}
				</ReactCSSTransitionGroup>
				<button onClick={
					()=>{
						let newValue=!this.state.showMessage;
						this.setState({
							showMessage:newValue
						});
					}
				}>Toggle message</button>
				<ReactCSSTransitionGroup transitionName="example"
										 transitionEnterTimeout={500}
										 transitionLeaveTimeout={300}>
					{messge}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
export default Animation;