var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js'
    },
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, path.resolve(__dirname, './src/utilities/'))
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader' },
        ]
    }
}