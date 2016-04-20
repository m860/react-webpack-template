export default {
    path:"/hello"
    ,getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require("pages/hello.jsx").default);
        });
    }
    ,onEnter({location}){
        console.log("enter /hello : ",location);
    }
    ,onLeave(){
        console.log("leave /hello");
        return "jkjji";
    }
    // ,onChange(...args){
    //     console.log("change /hello : ",args);
    // }
};
