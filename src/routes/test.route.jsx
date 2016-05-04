import IndexPage from "pages/test/index.jsx";

export default{
	path:"test"
	,indexRoute:{
		component:IndexPage
	}
	,childRoutes:[{
		path:"swipe-page-layout"
		,component:require("pages/test/swipe-page-layout.jsx").default
	}]
}