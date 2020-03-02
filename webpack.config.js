const path = require('path');

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.bundle.js'
    },
    module: {
        rules: [
            { test: [/\.js$/,/\.css$/ ], exclude: [/node_modules/], loader: ["babel-loader"] }
        ]
    }
};