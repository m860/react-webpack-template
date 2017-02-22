/**
 * Created by jean.h.ma on 2/8/17.
 */
import {PropTypes} from 'react'
import BaseComponent from './BaseComponent'

const style={
	navigation:{
		display:'flex',
		flexDirection:"row",
		justifyContent:"center",
		height:'60px',
		backgroundColor:"black",
		boxSizing:"border-box"
	},
	leftButton:{
		flex: 0.3,
		color:"white",
		display:"flex"
	},
	rightButton:{
		flex:0.3,
		color:"white",
		display:"flex"
	},
	title:{
		flex: 0.4,
		fontSize: '2rem',
		display:"flex",
		justifyContent:"center",
		color:"white",
		alignItems:"center",
		textAlign:'center'
	},
	backButton:{
		display:"flex",
		backgroundColor:"black",
		color:"white",
		border:"none",
		outline:"none",
		flex:1
	}
};

export default class NavigationBar extends BaseComponent {
	static propTypes = {
		title:PropTypes.string.isRequired,
		renderLeftButton:PropTypes.func,
		renderRightButton:PropTypes.func
	}
	static defaultProps = {
		renderLeftButton: self=>{
			return(
				<button className="back-button" style={style.backButton} onClick={event=>{
					window.history.back();
				}}>Back</button>
			);
		},
		renderRightButton: ()=>null
	}

	render() {
		return (
			<div className="navigation" style={style.navigation}>
				<div className="navigation-left-button" style={style.leftButton}>{this.props.renderLeftButton.call(null,this)}</div>
				<div className="navigation-title" style={style.title}>{this.props.title}</div>
				<div className="navigation-right-button" style={style.rightButton}>{this.props.renderRightButton.call(null,this)}</div>
			</div>
		);
	}
}