var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		index: './src/app.js',
		vendor: [
			"babel-polyfill",
			"react",
			"react-dom",
			"react-router",
			"classNames"
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		chunkFilename: "[chunkhash].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
				include: [
					path.resolve(__dirname, "src")
				]
			}, {
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: "css-loader"
					}, {
						loader: "postcss-loader"
					}, {
						loader: "sass-loader"
					}]
				})
			}, {
				test: /\.css$/,
				loader: ["style-loader", "css-loader"]
			}, {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}, {
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react'
			, ReactDOM: "react-dom"
			, classNames: "classNames"
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: './src/index.html',
			inject: false
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer({
						browsers: ['> 5%']
					})
				]
			}
		}),
		new ExtractTextPlugin("style.css"),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
			, filename: "vendor.bundle.js"
		}),
		new CleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: true,
			dry: false
		})
	]
}