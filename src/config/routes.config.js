/**
 * Created by jean.h.ma on 2/6/17.
 */
const routes = [{
	path: 'todo',
	indexRoute: {
		getComponent: (location, callback)=> {
			require.ensure([], (require)=> {
				callback(null, require("../pages/todo/List").default);
			});
		}
	}
}, {
	path: "test",
	indexRoute: {
		getComponent: (location, callback)=> {
			require.ensure([], (require)=> {
				callback(null, require("../pages/test/Page1.js").default);
			});
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



