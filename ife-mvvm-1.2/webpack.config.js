const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
	entry:'./src/index.js',
	output:{
		filename:'js/[name].js',
		path:path.resolve(__dirname+'/dist')
	},
	module:{
		rules:[
		{
		    test:/\.san$/,
            use:'san-loader'			
		},
		{
			test:/\.css$/,
			use:[
			     'style-loader',
				 'css-loader'
			]
		},
		{
			test:/\.js$/,
			use:'babel-loader',
			
		}
		]
	},
	plugins:[
	    new htmlWebpackPlugin({
			template:'index.html'
		})
	]
}
module.exports = config;
