var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	//开启dev source map
	devtool: 'eval-source-map',
	//开启webpack dev server
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		//配置preLoaders，将eslint添加进来
		preLoaders: [{
			test: /\.jsx?$/,
			loaders: ['eslint'],
			include: APP_PATH
		}],
		//配置loader，将Babel添加进去
		loaders: [{
			test: /\.js[x]*?$/,
			loaders: ['babel'],
			include: APP_PATH
		}]
	},
	//配置plugin
	plugins: [
		new HtmlwebpackPlugin({
			title: 'edit'
		})
	]
}