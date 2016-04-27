export default {
	path:"/test-swipe-page-layout"
	,getComponent(location,callback){
		require.ensure([],(require)=>{
			callback(null,require("pages/test-swipe-page-layout.jsx").default);
		});
	}
}