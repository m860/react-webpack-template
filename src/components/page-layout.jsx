class PageLayout extends React.Component {
	static propTypes(){
		return{
			children:React.PropTypes.any
		};
	}
	render() {
		return (
			<div className="page-layout">
				{this.props.children}
			</div>
		);
	}
}

export default PageLayout;