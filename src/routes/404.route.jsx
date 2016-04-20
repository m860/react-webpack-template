export default {
    path:"*"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/404.jsx").default);
        });
    }
};
