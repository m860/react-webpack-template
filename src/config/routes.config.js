/**
 * Created by jean.h.ma on 2/6/17.
 */
const routes = [{
	path: "test",
	indexRoute:{
		component: require('./../pages/test/Page1.js').default
	},
	childRoutes:[]
}, {
	path: '404',
	component: require('./../pages/404.js').default
}];
export default routes



