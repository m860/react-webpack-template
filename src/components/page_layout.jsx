class PageLayout extends React.Component {
	static propTypes(){
		return{
			children:React.PropTypes.any
		};
	}
	render() {
		return (
			<div className={'page'}>
				{this.props.children}
			</div>
		);
	}
}

export default PageLayout;