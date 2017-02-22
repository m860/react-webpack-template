/**
 * Created by jean.h.ma on 2/6/17.
 */
const routes = [{
	path:'todo',
	indexRoute:{
		component:require('../pages/todo/List').default
	}
},{
	path: "test",
	indexRoute:{
		component: require('../pages/test/Page1.js').default
	},
	childRoutes:[]
}, {
	path: '404',
	component: require('../pages/404.js').default
}];
export default routes



