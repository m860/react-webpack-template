TODO:
    * [done]添加页面切换效果,类似于app的效果
    * [done]实现页面back的切换效果
目录结构说明:
    routes:用于配置所有的route.
        所有的route配置文件都是异步加载的.
    pages:页面
        每当添加新页面时,需要添加或者修改对应的route文件.
    components:所有的组件
    assets:所有的资源文件,如:css,image,font等
    index.html:app host
        一般情况不需要修改
    index.jsx:整个程序的入口文件
        一般情况不需要修改