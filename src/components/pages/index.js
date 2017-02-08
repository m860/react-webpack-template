/**
 * Created by jean.h.ma on 2/6/17.
 */
import BaseComponent from '../baseComponent'
import Layout from '../customComponents/layout'
import NavigationBar from 'react-component-navigationbar'
import {Link} from 'react-router'

export default class Index extends BaseComponent{
	render(){
		return (
			<Layout>
				<NavigationBar title='Index' renderLeftButton={()=>null}/>
				<Link to='/test' className="link-button">page 1</Link>
				<Link to='/test/keyframes' className="link-button">Keyframes</Link>
			</Layout>
		);
	}
}