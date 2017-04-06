/**
 * Created by jean.h.ma on 2/6/17.
 */
import BasePage from './BasePage'
import Layout from '../components/Layout'
import {Link} from 'react-router'
import NavigationBar from '../components/NavigationBar'

export default class Index extends BasePage{
	render(){
		return (
			<Layout>
				<NavigationBar title="React Webpack Template" renderLeftButton={()=>null}/>
				<Link to='/todo' className="link-button">todo</Link>
			</Layout>
		);
	}
}