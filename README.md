# react-webpack
基于webpack的一个react项目模板,实现了一些常用的控件,工具

# Install
```bash
$ npm install -g webpack bower
$ git clone https://github.com/m860/react-webpack-template.git
$ cd react-webpack-template
$ npm install && bower install
```
# Development
```bash
$ npm run dev
```
win
```bash
$ npm run win-dev
```
然后在浏览器中访问:[http://localhost:3000](http://localhost:3000)
# Production
```bash
$ npm run build
```
win
```bash
$ npm run win-build
```
# Router
[react-router](https://github.com/ReactTraining/react-router)

项目中所有的route都是动态route
## How to add a dynamic route
1. 在routes文件夹中添加你的route文件(a.route.jsx),文件建议以.route.jsx结尾便于明确其功能,内容参考如下:
```javascript
export default{
	//路径名称
	path:"test"
	//index route,不需要设置path
	,indexRoute:{
		component:IndexPage
	}
	//子route是一个数组,数组元素就是一个route对象
	,childRoutes:[{
		path:"swipe-page-layout"
		,component:require("pages/test/swipe-page-layout.jsx").default
	}]
}
```
2.将route文件添加到index.route.jsx,如:
```javascript
export default (location, callback)=> {
	require.ensure([], (require)=> {
		callback(null, [
			require("routes/a.route.jsx").default,
			//must position bottom
			require("routes/404.route.jsx").default
		]);
	});
};
```
至此一个route添加完毕.
## 设置默认的state
如果需要设置默认的state,需要订阅onEnter事件,如:
```javascript
onEnter:(nextState)=>{
    nextState.location.state={
        title:"Index"
    };
}
```

# APP Configuration
## indexRoute
设置启动页route
## transitionTimeout
设置页面切换时的时间,单位是毫秒(ms)
## getTransitionName
设置页面切换的动画,可以根据location设置不同的动画,如:
```javascript
getTransitionName:(location)=>{
    if(location.action==="POP"){
        return "animation-page-back";
    }
    return "animation-page";
}
```
## navigationBar
设置NavigationBar的属性
###navigationBar.backButton
设置back键,如:
```javascript
backButton:{
    text:"back",
    className:"back-button",
    click(location,router){
        router.pop();
    }
}
```
###navigationBar.classNames
设置navigationBar的样式,包括navigationBar,left,title,right,如:
```javascript
classNames:{
    navigationBar:"navigation-bar",
    left:"navigation-bar-left",
    title:"navigation-bar-title",
    right:"navigation-bar-right",
}
```

# Components
## NavigationBar
<image src="https://raw.githubusercontent.com/m860/react-webpack-template/master/src/assets/temp/react-webpack-navigationbar.gif"></image>
### 设置back button
如果不设置将使用默认的back样式
```javascript
<NavigationBar
    location={location}
    backButton={{
    	text:"back",
    	className:"back-button",
    	click(location,router){
    		//do something
    	}
    }}
    />
```
### 修改title
```javascript
this.context.router.replace({
	path:this.props.location.pathname,
	state:{
		title:"your title"
	}
})
```
### 修改left button
```javascript
this.context.router.replace({
	path:this.props.location.pathname,
	state:{
		leftButton:[{
			text:"",
			className:"",
			click:(location,router)=>{}
		}]
	}
})
```
### 修改right button
```javascript
this.context.router.replace({
	path:this.props.location.pathname,
	state:{
		rightButton:[{
			text:"",
			className:"",
			click:(location,router)=>{}
		}]
	}
})
```
### 隐藏NavigationBar
```javascript
this.context.router.replace({
	path:this.props.location.pathname,
	state:{
		hideNavigationBar:true
	}
})
```







