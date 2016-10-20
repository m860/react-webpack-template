import BaseComponent from "../utility/baseComponent.jsx";

export default class Layout extends BaseComponent {
	static propTypes={
			children:React.PropTypes.any
	}
	render() {
		return (
			<div className="layout">
				{this.props.children}
			</div>
		);
	}
}
