/**
 * Created by jean.h.ma on 2/6/17.
 */
import BaseComponent from '../../baseComponent'
import Layout from '../../customComponents/layout'
// import NavigationBar from '../../customComponents/navigation'
import NavigationBar from 'react-component-navigationbar'
import {Link} from 'react-router'

export default class Page1 extends BaseComponent{
	render(){
		return (
			<Layout>
				<NavigationBar title="Page1"/>
				<Link to="/" className="link-button">Index</Link>
			</Layout>
		);
	}
}