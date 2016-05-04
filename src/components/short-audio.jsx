export default class ShortAudio extends React.Component{

	constructor(props){
		super(props);
		this.state={
			playStatus:null
		};
	}

	static get propTypes(){
		return {
			ops:React.PropTypes.object.isRequired
		};
	}

	play(){
		let audio=this.refs.audio;
		if(audio.play && this.props.ops.autoplay){
			audio.play();
			this.setState({
				playStatus:"playing"
			});
		}
	}

	pause(){
		let audio=this.refs.audio;
		if(audio && audio.pause){
			audio.pause();
			this.setState({
				playStatus:"paused"
			});
		}
	}

	componentDidMount(){
		let audio=this.refs.audio;
		let loaded=()=>{
			this.play();
			audio.removeEventListener("loadedmetadata",loaded);
		};
		this.$audioEnded=()=>{
			this.setState({
				playStatus:"paused"
			});
		};
		audio.addEventListener("loadedmetadata",loaded);
		audio.addEventListener("ended",this.$audioEnded);
	}

	componentWillUnmount(){
		this.refs.audio.removeEventListener("ended",this.$audioEnded);
	}

	render(){

		return (
			<div className={classNames('short-audio',{'short-audio-playing':this.state.playStatus==='playing'})} >
				<button style={{display:this.state.playStatus==='paused'?'':'none'}}
						onClick={()=>{this.play()}}><i className="fa fa-play fa-2x"></i></button>
				<button style={{display:this.state.playStatus==='playing'?'':'none'}}
						onClick={()=>{this.pause()}}><i className="fa fa-music  fa-2x"></i></button>
				<audio ref="audio" {...this.props.ops}>
				</audio>
			</div>
		);
	}
}