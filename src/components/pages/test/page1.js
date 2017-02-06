/**
 * Created by jean.h.ma on 2/6/17.
 */
import BaseComponent from '../../baseComponent'
import Layout from '../../customComponents/layout'
import Navigation from '../../customComponents/navigation'
import {Link} from 'react-router'

export default class Page1 extends BaseComponent{
	render(){
		return (
			<Layout>
				<Navigation title="Page1"/>
				<Link to="/" className="link-button">Index</Link>
			</Layout>
		);
	}
}