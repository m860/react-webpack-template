import IndexPage from "pages/test/index.jsx";

export default{
	path:"test"
	,indexRoute:{
		component:IndexPage
	}
	,childRoutes:[{
		path:"swipe-page-layout"
		,component:require("pages/test/swipe-page-layout.jsx").default
	},{
		path:"short-audio"
		,component:require("pages/test/short-audio.jsx").default
	},{
		path:"tab-page-layout"
		,component:require("pages/test/test-tab-page.jsx").default
	}]
}