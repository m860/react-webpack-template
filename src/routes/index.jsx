const indexRoute={
	getComponent(location,callback){
		require.ensure([],(require)=>{
			callback(null,require("pages/index.jsx").default);
		});
	}
};
export default {
	path:"/"
	,indexRoute
	,getChildRoutes(location,callback){
		require.ensure([],(require)=>{
			callback(null,[
				require("routes/hello.jsx").default
				,require("routes/404.jsx").default
			]);
		});
	}
};