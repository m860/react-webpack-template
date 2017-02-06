import BaseComponent from '../baseComponent'
import Layout from '../customComponents/layout'

export default class NoMatch extends BaseComponent {

	render() {
		return (
			<Layout>
				<div>404</div>
			</Layout>
		);
	}
}

