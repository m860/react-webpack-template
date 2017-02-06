# react-webpack
基于webpack的一个react项目模板,实现了一些常用的控件,工具

# Install
```bash
$ npm install -g webpack bower
$ git clone https://github.com/m860/react-webpack-template.git
$ cd react-webpack-template
$ npm install
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
        return "page-pop";
    }
    return "page-push";
}
```








