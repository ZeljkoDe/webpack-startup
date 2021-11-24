const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	target: 'web',
	mode: 'development', //production
	entry: {
		main: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		assetModuleFilename: "assets/",
		clean: true,   // <-- deletes all the files, and creates a new one every time webpack is run
	},
	devtool: 'inline-source-map',
	devServer: {
		// contentBase
		static: {
			directory: path.resolve(__dirname, './dist'),
		},
		port: 5001,
		open: true,
		hot: true,
	},
	// loaders
	module: {
		rules: [
			// css
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			// images
			{
				test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, // <-- check if the extension of used file is included 
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]'
				}
			},
			// fonts
			{
				test: /\.(ttf|otf|woff|woff2|eot)$/, // <-- check if the extension of used file is included 
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]'
				}
			},
			// js for babel
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
		]
	},
	// plugins
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack startup',  // <-- <title> DOCUMENT TITLE </title>
			filename: 'index.html',
			template: path.resolve(__dirname, 'src/temp.html')
		})
	]
}