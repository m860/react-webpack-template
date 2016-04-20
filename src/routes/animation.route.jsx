export default {
    path:"/animation"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/animation.jsx").default);
        });
    }
    // ,onEnter({location}){
    //     console.log("enter /hello : ",location);
    // }
    // ,onLeave(...args){
    //     console.log("leave /hello : ",args);
    // }
};
