export default {
	/**
	 * bootstrap route
	 * */
	indexRoute:{
		getComponent:(location,callback)=> {
			require.ensure([], (require)=> {
				callback(null, require("../pages/Index").default);
			})
		}
	},
	/**
	 * set page transition timeout , unit is millisecond
	 * the value must be same as transition's timeout in file which is placed in "assets/sass/common.sass"
	 * */
	transitionTimeout:500,
	/**
	 * get page transition name by location
	 * if location.action==="POP" then call transition leave else call transition enter
	 * the transition name is from "assets/sass/common.sass"
	 * @param {object} location
	 * @returns {string}
	 * */
	getTransitionName:(location)=>{
		if(location.action==="POP"){
			return "page-pop";
		}
		return "page-push";
	},
	/**
	 * navigationbar configuration
	 * @property {object} backButton
	 * @property {object} classNames - you maybe set navigationBar,left,title,right only.
	 * */
	navigationBar:{
	}
}