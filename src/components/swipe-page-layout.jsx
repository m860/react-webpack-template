class SwipeArrow extends React.Component {

	render() {
		return (
			<div className="swipe-arrow"><i className="fa fa-caret-up fa-3x"></i></div>
		);
	}

}

export class SwipePageLayout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			swipePageLayoutStyle: {}
		};

		this._children = null;

		this._swipeMaxIndex = this.props.children.length - 1;

		this._touchPoint = null;
		//swipe direction is dynamic value by touched position
		this._swipeDirection = null;
		//swipe status : ready , done
		//swiping only one time when touching
		this._swipeStatus = null;
		//current swipe position index
		this._swipeIndex = 0;
		//translate step default is 100
		//when swipe direction is horizontal , the translate step is a dynamic value by children count.
		this._translateStep = 100;
		this._childWidth = 100;


		if (this.isHorizontal()) {
			let newStyle = Object.assign({}, this.state.swipePageLayoutStyle, {
				width: `${this.props.children.length * 100}%`
			});

			// this.setState({
			// 	swipePageLayoutStyle: newStyle
			// });
			this.state = {
				swipePageLayoutStyle: newStyle
			};
			this._childWidth = 100 / this.props.children.length;
			this._translateStep = this._childWidth;
		}
	}

	get swipeIndex() {
		if (this._swipeIndex < 0) {
			this._swipeIndex = 0;
		}
		if (this._swipeIndex > this._swipeMaxIndex) {
			this._swipeIndex = this._swipeMaxIndex;
		}
		return this._swipeIndex;
	}

	get children() {
		if (!this._children) {
			this._children = [];
			this.props.children.map((child, index)=> {
				this._children.push(React.cloneElement(child, {
					width: this._childWidth,
					key: index
				}));
			})
		}
		return this._children;
	}


	static get propTypes() {
		return {
			children: React.PropTypes.any
			, direction: React.PropTypes.string
			, showSwipeArrow: React.PropTypes.bool
		};
	}

	static get defaultProps() {
		return {
			direction: ""
			, showSwipeArrow: true
		};
	}

	isHorizontal() {
		return this.props.direction.toLocaleLowerCase() === "horizontal";
	}

	swipe(direction) {
		console.log("swipe direction : %s", direction);
		let value;
		switch (direction) {
			case "up":
				if (!this.isHorizontal()) {
					this._swipeIndex++;
					value = `translate3d(0,-${this.swipeIndex * this._translateStep}%,0)`;
				}
				break;
			case "down":
				if (!this.isHorizontal()) {
					this._swipeIndex--;
					value = `translate3d(0,-${this.swipeIndex * this._translateStep}%,0)`;
				}
				break;
			case "left":
				if (this.isHorizontal()) {
					this._swipeIndex++;
					value = `translate3d(-${this.swipeIndex * this._translateStep}%,0,0)`;
				}
				break;
			case "right":
				if (this.isHorizontal()) {
					this._swipeIndex--;
					value = `translate3d(-${this.swipeIndex * this._translateStep}%,0,0)`;
				}
				break;
			default:
		}
		if (value) {
			let newStyle = Object.assign({}, this.state.swipePageLayoutStyle, {
				WebkitTransform: value,
				MozTransform: value,
				OTransform: value,
				transform: value
			});
			this.setState({
				swipePageLayoutStyle: newStyle
			});
		}
	}

	touchStart(event) {
		let touched = event.changedTouches[0];
		this._touchPoint = {x: touched.pageX, y: touched.pageY};
		this._swipeStatus = "ready";
	}

	touchMove(event) {
		event.preventDefault();
		let touched = event.changedTouches[0];
		if (this._swipeStatus === "ready") {
			if (!this._swipeDirection) {
				let x = touched.pageX - this._touchPoint.x;
				let y = touched.pageY - this._touchPoint.y;
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

	touchEnd() {
		this._touchPoint = null;
		this._swipeDirection = null;
	}

	render() {
		let ulClassName = classNames({
			'swipe-page-layout': !this.isHorizontal()
			, 'swipe-page-layout-horizontal': this.isHorizontal()
		});
		return (
			<div style={{height:'100%'}}>
				<ul className={ulClassName}
					onTouchStart={(event)=>this.touchStart(event)}
					onTouchMove={(event)=>this.touchMove(event)}
					onTouchEnd={(event)=>this.touchEnd(event)}
					style={this.state.swipePageLayoutStyle}>
					{this.children}
				</ul>
				<ReactCSSTransitionGroup transitionName="swipe-arrow"
										 transitionEnterTimeout={500}
										 transitionLeaveTimeout={500}>
					{this.props.showSwipeArrow && this.swipeIndex !== this._swipeMaxIndex ?
						<SwipeArrow></SwipeArrow> : null}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export class SwipePage extends React.Component {

	constructor(props){
		super(props);
		if(props.style){
			Reflect.deleteProperty(props,"width");
		}
	} 

	static get propTypes() {
		return {
			children: React.PropTypes.any
			, width: React.PropTypes.number
			,style:React.PropTypes.object
		};
	}

	render() {
		let newStyle=Object.assign({},this.props.style||{},{
			width:`${this.props.width}%`
		});
		return (
			<li style={newStyle}>
				{this.props.children}
			</li>
		);
	}
}



