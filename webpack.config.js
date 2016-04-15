var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: "./src/index.jsx",
		vendor: ["react"
			, "react-dom"
			, "react-router"
			, "react-classnames"]
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[hash].js"
		, chunkFilename: "[chunkhash].[hash].js"
		//publicPath:path.join(__dirname,"dist")
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
				// 'babel-loader' is also a legal name to reference
				//loaders: ["babel-loader?presets[]=es2016,presets[]=react", "eslint-loader?{rules:{semi:0}}"]
				, loader: "babel-loader?presets[]=es2015,presets[]=react"
			}, {
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			}
		]
		, preLoaders: [
			{
				test: /\.jsx$/
				, loader: "eslint-loader"
				, exclude: /node_modules/
			}
		]
	},
	resolve: {
		//设置别名
		alias: {
			bower: path.join(__dirname, "bower_components")
			, pages: path.join(__dirname, "src/pages")
			, components: path.join(__dirname, "src/components")
			, routes: path.join(__dirname, "src/routes")
			, assets: path.join(__dirname, "src/assets")
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
		//全局module
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDom: "react-dom",
			className: "react-classnames"
		}),
		//把所有的css打包到style.css
		new ExtractTextPlugin("[contenthash].css"),
		//清除发布目录
		new CleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: true,
			dry: false
		}),
		//html
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: './src/index.html',
			//hash: true,
			inject: false
			// files: {
			// 	css: ["style.css"],
			// 	js: ["vendor.bundle.js", "bundle.js"],
			// 	// chunks:{
			// 	//     vendor:{
			// 	//         entry:"dist/vendor.bundle.js",
			// 	//         css:[]
			// 	//     },
			// 	//     index:{
			// 	//         entry:"dist/bundle.js",
			// 	//         css:["dist/style.css"]
			// 	//     }
			// 	// }
			// }
		})
	]
};