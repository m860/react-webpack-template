export default {
    path:"/hello"
    ,getComponent(location,cb){
        require([],(require)=>{
            cb(null,require("pages/index.jsx"));
        });
    }
};
