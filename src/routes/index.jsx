export default {
	path:"/"
	,getComponent(location,cb){
		require([],(require)=>{
			cb(null,require("pages/index.jsx"));
		});
	}
};