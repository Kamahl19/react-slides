const webpack = require('webpack');
const path = require('path');
const yargs = require('yargs');
const autoprefixer = require('autoprefixer');
const aliases = require('./aliases');
const commons = require('./common');

const env = yargs.argv.mode;

const libraryName = 'ReactSlides';

const loaders = [
    { test: /\.jsx?$/, loader: 'babel', include: commons.root('src') },
    { test: /\.json$/, loader: 'json' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' }
];

let plugins;

if (env === 'build') {
    plugins = [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    ];

    loaders.push(
        { test: /\.css$/, loader: 'style!css?minimize!postcss' },
        { test: /\.less$/, loader: 'style!css?minimize!less!postcss' }
    );
}
else {
    plugins = [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    ];

    loaders.push(
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.less$/, loader: 'style!css!less?sourceMap' }
    );
}

module.exports = {
    entry: {
        main: [
            'babel-polyfill',
            './src/main',
        ]
    },

    devtool: (env === 'build') ? 'source-map' : 'cheap-module-eval-source-map',

    debug: (env !== 'build'),

    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx', '.json', '.css', '.html', '.less'],
        alias: aliases,
    },

    output: {
        path: commons.root('lib'),
        filename: (env === 'build') ? `${libraryName}.min.js` : `${libraryName}.js`,
        library: (env === 'build') ? `${libraryName}.min.js` : `${libraryName}.js`,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },

    module: {
        loaders,
    },

    plugins,

    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
};
