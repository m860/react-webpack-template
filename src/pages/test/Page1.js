/**
 * Created by jean.h.ma on 2/6/17.
 */
import BasePage from '../BasePage'
import Layout from '../../components/Layout'
import {Link} from 'react-router'

export default class Page1 extends BasePage{
	render(){
		return (
			<Layout>
				<Link to="/" className="link-button">Index</Link>
			</Layout>
		);
	}
}