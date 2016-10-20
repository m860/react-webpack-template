export default (location, callback)=> {
	require.ensure([], (require)=> {
		callback(null, [
			//must position bottom
			require("routes/404.route.jsx").default
		]);
	});
};



