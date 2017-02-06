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

# 依赖项
* "classnames": "^2.2.4",
* "font-awesome": "^4.7.0",
* "md5": "^2.2.1",
* "normalize-css": "^2.3.1",
* "react": "^15.0.1",
* "react-addons-css-transition-group": "^15.0.1",
* "react-dom": "^15.0.1",
* "react-router": "^2.0.1"

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








