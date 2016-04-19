export default {
    path:"/transitiongroupdemo"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/transition_group_demo.jsx").default);
        });
    }
    // ,onEnter({location}){
    //     console.log("enter /hello : ",location);
    // }
    // ,onLeave(...args){
    //     console.log("leave /hello : ",args);
    // }
};
