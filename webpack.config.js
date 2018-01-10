const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './scripts/index.html',
	filename: 'index.html'
})

var config = {
	entry: __dirname + '/scripts/main.js',
	output: {
			path: __dirname + '/dist',
			filename: 'index.js'
		},
	devServer: {
			inline: true,
			port: 8080
		},
	module: {
			loaders: [
				{
					test: /\.(js|jsx)?$/,
					exclude: /node-modules/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015', 'react']
					}
				},
				{
					test: /\.(css|scss)?$/,
					loader: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
	plugins: [
		HtmlWebpackPluginConfig
	]
}

module.exports = config;