const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBaseConfig = {
    mode: "production",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash:8].js',
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js',
        environment: {
            arrowFunction: false,
            destructuring: false,
            forOf: false,
        },
        library: {
            name: 'Modal',
            type: 'var',
            export: 'default'
        }
    },
    entry: {
        index: './src/index.js',
        test: './test/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试页面',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tpl\.(html|html)$/,
                use: 'raw-loader',
            },
            {
                test: /\.(sc|c)ss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};

module.exports = webpackBaseConfig;
