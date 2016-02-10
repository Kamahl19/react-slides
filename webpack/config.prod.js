const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('lodash.merge');
const baseConfig = require('./config.base');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    plugins: baseConfig.plugins.concat([
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]),
});