/**
 * Created by jean.h.ma on 2/6/17.
 */
import BaseComponent from '../../baseComponent'
import Layout from '../../customComponents/layout'
import NavigationBar from 'react-component-navigationbar'
import {Link} from 'react-router'
import KeyFramesWithImage from '../../customComponents/keyFramesWithImage'

export default class Page1 extends BaseComponent {
	render() {
		return (
			<Layout>
				<NavigationBar title="Keyframes"/>
				<KeyFramesWithImage frames={[
					require('../../../assets/keyframes/button/1.png')
					, require('../../../assets/keyframes/button/2.png')
					, require('../../../assets/keyframes/button/3.png')
					, require('../../../assets/keyframes/button/4.png')
					, require('../../../assets/keyframes/button/5.png')
					, require('../../../assets/keyframes/button/6.png')
					, require('../../../assets/keyframes/button/7.png')
					, require('../../../assets/keyframes/button/8.png')
					, require('../../../assets/keyframes/button/9.png')
					, require('../../../assets/keyframes/button/10.png')
					, require('../../../assets/keyframes/button/11.png')
					, require('../../../assets/keyframes/button/12.png')
					, require('../../../assets/keyframes/button/13.png')
				]} name='animation-button'/>
				<div style={{width:'100px',height:'100px',backgroundSize:'100%',backgroundRepeat:'no-repeat',backgroundPosition:'center',animation:'animation-button1 1s steps(1) infinite'}}></div>
			</Layout>
		);
	}
}