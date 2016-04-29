export default (location, callback)=> {
	require.ensure([], (require)=> {
		callback(null, [
			require("routes/page1.route.jsx").default
			, require("routes/page2.route.jsx").default
			, require("routes/animation.route.jsx").default
			, require("routes/test-swipe-page-layout.route.jsx").default


			//must position bottom
			, require("routes/404.route.jsx").default
		]);
	});
};



