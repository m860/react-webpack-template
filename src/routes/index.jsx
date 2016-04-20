const indexRoute={
	getComponent(location,callback){
		require.ensure([],(require)=>{
			callback(null,require("pages/index.jsx").default);
		});
	}
	,onChange(){
		console.log("route change");
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
				,require("routes/transition_group_demo.jsx").default
				,notFoundRoute
			]);
		});
	}
};