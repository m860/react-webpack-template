export default {
    path:"/hello"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/hello.jsx").default);
        });
    }
    // ,onEnter({location}){
    //     console.log("enter /hello : ",location);
    // }
    // ,onLeave(...args){
    //     console.log("leave /hello : ",args);
    // }
};
