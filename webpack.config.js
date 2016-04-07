var webpack = require("webpack");

module.exports = {
    entry: {
        index:"./src/index.jsx",
        vendor:["react","react-dom"]
    },
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style/url!file"
            },
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "dist/vendor.bundle.js")
    ]
};