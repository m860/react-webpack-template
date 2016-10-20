export default class BaseComponent extends React.Component{
	static contextTypes={
		router: React.PropTypes.object.isRequired
	}
}