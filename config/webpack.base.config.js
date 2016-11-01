import webpack from 'webpack';
import path from 'path';
import baseConfig from './base.config.js';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const pwd = __dirname;
const rootPath = path.join(pwd, '../');

module.exports = {
    entry: {
        app: './src/app.jsx'
    },
    output: {
        path: baseConfig.build.assetsRoot,
		publicPath: '/',
		filename: '[name].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
				loader: "eslint-loader",
				exclude: /node_modules/,
				include: rootPath
            },

			{
				test: /\.jsx?/,
				include: __dirname + '/src',
				loader: 'jsxhint-loader'
  			}
		],
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"],
                exclude: /node_modules/
    		},

            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },

			{
                test: /\.jsx$/,
                loader: 'jsx-loader?harmony'
            },

            {
                test: /\.js|jsx$/,
				loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
				include: rootPath,
				exclude: path.join(rootPath, 'node_modules/')
            }
        ]
    },
	eslint: {
		formatter: require('eslint-friendly-formatter')
	},
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
