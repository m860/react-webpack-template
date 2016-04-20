
class Page extends React.Component{
	static get propTypes(){
		return{
			children:React.PropTypes.any
		};
	}
	render(){
		return(
			<div className="page">
				{this.props.children}
			</div>
		);
	}
}

export default Page;