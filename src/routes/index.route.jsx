export default (location, callback)=> {
	require.ensure([], (require)=> {
		callback(null, [
			require("routes/page1.route.jsx").default
			, require("routes/page2.route.jsx").default
			, require("routes/animation.route.jsx").default
			, require("routes/test-slide-page-layout.route.jsx").default
			// ,{
			// 	path:"/test-slide-page-layout"
			// 	,getComponent(loc,cb){
			// 		require.ensure([],(r)=>{
			// 			cb(null,r("pages/test-slide-page-layout.jsx").default);
			// 		});
			// 	}
			// }

			//must position bottom
			, require("routes/404.route.jsx").default
		]);
	});
};