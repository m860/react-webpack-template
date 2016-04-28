export class SwipePageLayout extends React.Component {
	constructor(props){
		super(props);
		this._touchPoint=null;
		this._swipeDirection=null;
		this._swipeStatus=null;
		this._swipeIndex=0;
		this.state={
			ulStyle:{}
		};
	}
	static propTypes(){
		return{
			children:React.PropTypes.any
			//,direction:React.PropTypes.string
		};
	}
	swipe(direction){
		let value;
		switch(direction){
			case "up":
				this._swipeIndex++;
				value=`translate3d(0,-${this._swipeIndex*100}%,0)`;
				break;
			case "down":
				this._swipeIndex--;
				value=`translate3d(0,-${this._swipeIndex*100}%,0)`;
				break;
			case "left":
				this._swipeIndex--;
				value=`translate3d(-${this._swipeIndex*100}%,0,0)`;
				break;
			case "right":
				this._swipeIndex++;
				value=`translate3d(-${this._swipeIndex*100}%,0,0)`;
				break;
			default:
		}
		this.setState({
			ulStyle:{
				"WebkitTransform":value,
				"MozTransform":value,
				"OTransform":value,
				"transform":value
			}
		});
	}
	touchStart(event){
		let touched=event.changedTouches[0];
		this._touchPoint={x:touched.pageX,y:touched.pageY};
		this._swipeStatus="ready";
	}
	touchMove(event){
		event.preventDefault();
		let touched=event.changedTouches[0];
		if(this._swipeStatus==="ready") {
			if (!this._swipeDirection) {
				let x=touched.pageX - this._touchPoint.x;
				let y=touched.pageY - this._touchPoint.y;
				let diff = {x, y};
				if (Math.abs(diff.x) > Math.abs(diff.y)) {
					// left or right
					if (diff.x > 0) {
						this._swipeDirection = "right";
					}
					else {
						this._swipeDirection = "left";
					}
				}
				else {
					// down or up
					if (diff.y > 0) {
						this._swipeDirection = "down";
					}
					else {
						this._swipeDirection = "up";
					}
				}
			}
			else {
				if (this._swipeStatus !== "done") {
					// swipe
					this.swipe(this._swipeDirection);
					this._swipeStatus = "done";
				}
			}
		}

	}
	touchEnd(){
		this._touchPoint=null;
		this._swipeDirection=null;
	}
	render() {
		return (
			<ul className="slide-page-layout" onTouchStart={(event)=>this.touchStart(event)}
				onTouchMove={(event)=>this.touchMove(event)}
				onTouchEnd={(event)=>this.touchEnd(event)} style={this.state.ulStyle}>
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

