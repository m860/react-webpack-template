/**
 * Created by jean.h.ma on 2/7/17.
 */
import styleSheet, {ImageFrames} from '../../utility/styleSheet'

export default class KeyFramesWithImage extends React.Component {
	static propTypes = {
		name:React.PropTypes.string.isRequired,
		frames: React.PropTypes.array.isRequired,
		duration: React.PropTypes.string,
		className: React.PropTypes.string,
		style: React.PropTypes.object
	}
	static defaultProps = {
		duration: '1s'
	}

	constructor(props) {
		super(props);
		this.style = Object.assign({
			WebkitAnimationIterationCount: 'infinite',
			animationIterationCount: 'infinite',
			WebkitAnimationTimingFunction: 'steps(1)',
			animationTimingFunction: 'steps(1)',
			WebkitAnimationName: props.name,
			animationName: props.name,
			WebkitAnimationDuration: props.duration
			,animationDuration: props.duration
			, width: '100px'
			, height: '100px'
			, backgroundSize: '100%'
			, backgroundRepeat: 'no-repeat'
		}, props.style);
		if (!styleSheet.hasStyleSheet(props.name)) {
			styleSheet.createStyleSheet(props.name, new ImageFrames(props.name, props.frames).toString());
		}
	}

	render() {
		console.log('render',this.style)
		return (
			<div className={this.props.className}
				 style={this.style}>
			</div>
		);
	}
}