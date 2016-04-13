import {Link} from "react-router"

const LinkActive = {color: "red"};

class Index extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/hello" activeStyle={LinkActive}>/hello</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}
Index.propTypes = {
	children: React.PropTypes.node
};

export default Index;