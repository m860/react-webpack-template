/**
 * Created by jean.h.ma on 2/6/17.
 */
const routes = [{
	path: "test",
	indexRoute:{
		component: require('./components/pages/test/page1.js').default
	},
	childRoutes:[{
		path:'keyframes',
		component:require('./components/pages/test/testKeyframes').default
	}]
}, {
	path: '404',
	component: require('./components/pages/404.js').default
}];
export default routes



