var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'public'),
    entry: './scripts/main.js',
    output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};