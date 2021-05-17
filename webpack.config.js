const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  plugins: [
      // To strip all locales except “en”
      new MomentLocalesPlugin(),

      // Or: To strip all locales except “en”, “es-us” and “ru”
      // (“en” is built into Moment and can’t be removed)
      new MomentLocalesPlugin({
          localesToKeep: ['et'],
      }),
  ],
    entry: {
        kool: './src/kellad.js',
        script: './src/kool.js',
        teha: './src/teha.js'
    },

    output: {
        path: path.join(__dirname, 'components'),
        filename: '[name].bundle.js', // Hacky way to force webpack   to have multiple output folders vs multiple files per one path
    },

    module: {
        rules: [
            { test: [/\.js$/,/\.css$/ ], exclude: [/node_modules/], loader: ["babel-loader"] }
        ]
    }
};
