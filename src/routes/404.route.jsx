export default {
    path:"/404"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/404.jsx").default);
        });
    }
};
