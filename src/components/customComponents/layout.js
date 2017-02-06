import BaseComponent from "../baseComponent.js";

export default class Layout extends BaseComponent {
	static propTypes = {
		children: React.PropTypes.any,
		className:React.PropTypes.any
	}

	render() {
		return (
			<div className={classNames('layout',this.props.className)}>
				{this.props.children}
			</div>
		);
	}
}
