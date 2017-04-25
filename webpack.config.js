const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const DIST_DIR = path.resolve(__dirname,"dist");
const SRC_DIR = path.resolve(__dirname,"src");

module.exports = {
    entry: SRC_DIR + '/index.js',
    output: {
        path: DIST_DIR,
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: SRC_DIR + '/index.html',
            filename: 'index.html',
            hash: true
        }),
        new ExtractTextPlugin({
            filename: "css/app.bundle.css"
        })
    ],
    devServer: {
        compress: true,
        open:  true
    }
};