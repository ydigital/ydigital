const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./app.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "js/bundle.js"
	},
	resolve: {
		alias: {
			csGsap: path.resolve(__dirname, 'src/js/gsap.js'),
			csScript: path.resolve(__dirname, 'src/js/script.js'),
			csStyle: path.resolve(__dirname, 'src/scss/main.scss')
		}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "postcss-loader"
						},
						{
							loader: "sass-loader"
						}
					]
				})
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ["es2015"]
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("css/style.css")
	]
}