/**
 * Created by jean.h.ma on 2/22/17.
 */
import {Component, PropTypes} from 'react'
export default class BasePage extends Component {
	static contextTypes = {
		router: PropTypes.object.isRequired
	}
}