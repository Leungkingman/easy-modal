const path = require('path');

const webpackBaseConfig = {
    mode: "production",
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        library: {
            name: 'Modal',
            type: 'var',
            export: 'default'
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
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
