const indexRoute={
	getComponent(location,callback){
		require.ensure([],(require)=>{
			callback(null,require("pages/index.jsx").default);
		});
	}
};

const notFoundRoute={
	path:"*"
	,getComponent(location,callback){
		require.ensure([],(require)=>{
			callback(null,require("pages/404.jsx").default);
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
				,require("routes/animation.jsx").default
				,notFoundRoute
			]);
		});
	}
};