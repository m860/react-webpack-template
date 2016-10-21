export default (location, callback)=> {
	require.ensure([], (require)=> {
		callback(null, [
			require("routes/test.route.jsx").default,
			//must position bottom
			require("routes/404.route.jsx").default
		]);
	});
};



