export default {
    path:"/page2"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/page2.jsx").default);
        });
    }
};
