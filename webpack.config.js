const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/common/index.js',
        home: './src/view/home/home.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                type: 'asset',
                generator: {
                    filename: 'img/[hash:6][ext]',
                }
            },
            {
                test: /\.(woff2|ttf|woff)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[hash:6][ext]',
                }
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/common/index.html',
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './src/view/home/home.html',
            filename: 'home.html',
            chunks: ['home'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: './build',
        compress: true,
        port: 8080,
        open: true
    }
}

