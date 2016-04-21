var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var isProduction = function () {
	return process.env.NODE_ENV === 'production';
};

console.log("environment:%s", process.env.NODE_ENV);

var output = {
	path: path.join(__dirname, "dist")
};
if (isProduction()) {
	output.filename = "[hash].js";
	output.chunkFilename = "[chunkhash].[hash].js";
}
else {
	output.filename = "bundle.js";
	output.chunkFilename = "[id].bundle.js";
}

var plugins = [
	//package vendor libs
	new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
	//global module
	, new webpack.ProvidePlugin({
		React: 'react'
		, ReactDOM: "react-dom"
		, className: "react-classnames"
		, ReactCSSTransitionGroup: "react-addons-css-transition-group"
		, ReactMixin: "react-mixin"
	})
	//clean dist
	, new CleanWebpackPlugin(['dist'], {
		root: __dirname,
		verbose: true,
		dry: false
	})
	//inject style & javascript to index.html template
	, new HtmlWebpackPlugin({
		filename: "index.html",
		template: './src/index.html',
		inject: false
	})
];
if (isProduction()) {
	//package style
	plugins.push(new ExtractTextPlugin("[contenthash].css"));
	//compress javascript
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}));
}
else {
	plugins.push(new ExtractTextPlugin("style.css"));
}

module.exports = {
	entry: {
		index: "./src/index.jsx",
		vendor: [
			"react"
			, "react-dom"
			, "react-router"
		]
	}
	, output: output
	, module: {
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
				, loader: "babel-loader"
			}, {
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
			}, {
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}
		]
		, preLoaders: [
			{
				test: /\.jsx$/
				, loader: "eslint-loader"
				, exclude: /node_modules/
			}
		]
	}
	,babel:{
		presets: ["es2015", "react"]
		//, plugins: ["transform-runtime"]
	}
	, postcss: function () {
		return [autoprefixer({browsers: ['> 5%']})];
	}
	, resolve: {
		//设置别名
		alias: {
			bower: path.join(__dirname, "bower_components")
			, pages: path.join(__dirname, "src/pages")
			, components: path.join(__dirname, "src/components")
			, routes: path.join(__dirname, "src/routes")
			, assets: path.join(__dirname, "src/assets")
			, config: path.join(__dirname, "src/config")
		}
	}
	, plugins: plugins
};