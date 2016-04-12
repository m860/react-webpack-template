export default {
	path: "/"
	, getComponent(location, callback){
		require.ensure([], (require)=> {
			callback(null, require("pages/index.jsx").default);
		});
	}
	,getChildRoutes(location,callback){
		require.ensure([],(require)=>{
			callback(null,[
				require("routes/hello.jsx").default
				,require("routes/nomatch.jsx").default
			]);
		});
	}
};