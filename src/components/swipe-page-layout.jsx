export class SwipePageLayout extends React.Component {
	static propTypes(){
		return{
			children:React.PropTypes.any
		};
	}
	render() {
		return (
			<ul className="slide-page-layout">
				{this.props.children}
			</ul>
		);
	}
}

export class SwipePage extends React.Component{
	static propTypes(){
		return{
			children:React.PropTypes.any
		};
	}
	render(){
		return (
			<li className="slide-page">
				{this.props.children}
			</li>
		);
	}
}

