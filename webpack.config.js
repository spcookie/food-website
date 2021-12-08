let mode = 'development'
// let mode = 'production'

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode,
    entry: ['./src/index.js', './src/index.html'],
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                oneOf: [
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            favicon: resolve(__dirname, './src/favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    performance: {
        hints: 'warning', // 枚举 false关闭
        maxEntrypointSize: 100000000, // 最大入口文件大小
        maxAssetSize: 100000000, // 最大资源文件大小
        assetFilter: function(assetFilename) { //只给出js文件的性能提示
            return assetFilename.endsWith('.js');
        }
    },
    devServer: {
        static: './build',
        compress: true,
        port: 8080,
        open: true,
        hot: true
    }
}

