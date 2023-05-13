const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const environment = process.env.NODE_ENV || 'development'; // indicate the current environment that the application is running in
const isDevelopmentEnvironment = environment === 'development'; // true if the environment variable is equal to the 'development'
const browserSupport = isDevelopmentEnvironment ? 'web' : 'browserslist'; // web - code will be used in the web browser : specific set of browsers
const sourceMapType = isDevelopmentEnvironment ? 'source-map' : undefined; // generates source maps to help with debugging in development mode

module.exports = { // configuration object for webpack
    mode: environment,
    target: browserSupport,
    devtool: sourceMapType,
    devServer: { // settings for devServer
        open: true,
        hot: true,
    },
    entry: path.resolve(__dirname, 'src', 'index.js'), // entry point for application
    output: { // where output files should be generated
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js',
    },
    plugins: [ // specify the plugins to use with Webpack
        new HtmlWebpackPlugin({ // generates HTML file
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({ // extract css into a separate file
            filename: '[name].[contenthash].css',
        })
    ],
    module: { // specifies the loaders to use for different file types, each loader is associated with a specific file type
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    isDevelopmentEnvironment ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"],
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}