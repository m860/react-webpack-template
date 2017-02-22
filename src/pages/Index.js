/**
 * Created by jean.h.ma on 2/6/17.
 */
import BasePage from './BasePage'
import Layout from '../components/Layout'
import {Link} from 'react-router'

export default class Index extends BasePage{
	render(){
		return (
			<Layout>
				<Link to='/test' className="link-button">page 1</Link>
				<Link to='/test/keyframes' className="link-button">Keyframes</Link>
			</Layout>
		);
	}
}