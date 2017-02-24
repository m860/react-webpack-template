/**
 * Created by jean.h.ma on 2/6/17.
 */

const routes = [{
	path: 'todo',
	indexRoute: {
		getComponent:(location,callback)=>{
			System.import("../pages/todo/List")
				.then(m=>{
					callback(null,m.default);
				});
		}
	}
}, {
	path: "test",
	indexRoute: {
		async getComponent(location, callback) {
			let module=await System.import("../pages/test/Page1.js");
			callback(null,module.default);
		}
	},
	childRoutes: []
}, {
	path: '404',
	getComponent: (location, callback)=> {
		require.ensure([], (require)=> {
			callback(null, require("../pages/404.js").default);
		});
	}
}];
export default routes



