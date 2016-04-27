export default {
	path:"/test-slide-page-layout"
	,getComponent(location,callback){
		require.ensure([],(require)=>{
			callback(null,require("pages/test-slide-page-layout.jsx").default);
		});
	}
}