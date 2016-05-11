import PageLayout from "components/page-layout.jsx";

export class TabPageLayout extends React.Component{

	constructor(props){
		super(props);
		this.state={
			active:0
		};
	}

	static get propTypes(){
		return {
			children:React.PropTypes.any
			,tabs:React.PropTypes.array.isRequired
		};
	}
	render(){
		return (
			<PageLayout>
				<ul className={classNames("tab-page-headers")}>
					{this.props.tabs.map((tab,index)=>{
						return (
							<li className={classNames("tab-page-head",{'active':this.state.active===index})}
								onClick={()=>{
									this.setState({
										active:index
									});
								}}
								key={index}>{tab}</li>
						);
					})}
				</ul>
				{this.props.children.map((content,index)=>{
					return (
						React.cloneElement(content,{
							key:index
							,show:index===this.state.active
						})
					);
				})}
			</PageLayout>
		);
	}
}

export class TabPageContent extends React.Component{
	static get propTypes(){
		return {
			children:React.PropTypes.any
			,show:React.PropTypes.bool
		};
	}
	render(){
		return (
			<div className={classNames('tab-page-content',{'active':this.props.show})} style={{'display':this.props.show?'':'none'}}>
				{this.props.children}
			</div>
		);
	}
}