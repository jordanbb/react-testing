const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const DIST_DIR = path.resolve(__dirname,"dist");
const SRC_DIR = path.resolve(__dirname,"src");

const extractSass = new ExtractTextPlugin({
    filename: "css/app.bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: SRC_DIR + '/index.js',
    output: {
        path: DIST_DIR,
        filename: 'app.bundle.js'
    },
    devtool: "source-map",
    resolve: {
        modules: [SRC_DIR, "node_modules"]
    },
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
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        },
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
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
        extractSass
    ],
    devServer: {
        compress: true,
        open:  true
    }
};