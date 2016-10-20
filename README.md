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
# Components
## NavigationBar
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







