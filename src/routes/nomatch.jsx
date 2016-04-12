export default {
    path:"/nomatch"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/nomatch.jsx").default);
        });
    }
};
