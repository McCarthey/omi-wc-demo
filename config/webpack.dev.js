const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const opn = require('opn');

opn('http://localhost:3000/')

module.exports = merge(require('./webpack.base'), {
    entry: [
        path.join(__dirname, '..', 'src/index.tsx')
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '..', 'build'),
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src/index.html'),
            inject: true,
        })
        , new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
        , new webpack.NamedModulesPlugin()
    ]
})