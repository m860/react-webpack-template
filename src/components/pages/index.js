/**
 * Created by jean.h.ma on 2/6/17.
 */
import BaseComponent from '../baseComponent'
import Layout from '../customComponents/layout'
import Navigation from '../customComponents/navigation'

export default class Index extends BaseComponent{
	render(){
		return (
			<Layout>
				<Navigation title='Index'/>
				<a href="#/test" className="link-button">page 1</a>
			</Layout>
		);
	}
}