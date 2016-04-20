export default {
    path:"/page1"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/page1.jsx").default);
        });
    }
};
