const path = require('path');
const yargs = require('yargs');
const autoprefixer = require('autoprefixer');
const commons = require('./common');

const env = yargs.argv.mode;

const loaders = [];

if (env === 'build') {
    loaders.push(
        { test: /\.css$/, loader: 'style!css?minimize!postcss' },
        { test: /\.less$/, loader: 'style!css?minimize!less!postcss' }
    );
}
else {
    loaders.push(
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.less$/, loader: 'style!css!less?sourceMap' }
    );
}

module.exports = {
    entry: './src/main',

    devtool: (env === 'build') ? 'source-map' : 'cheap-module-eval-source-map',

    debug: (env !== 'build'),

    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx', '.css', '.less'],
    },

    output: {
        path: commons.root('lib'),
    },

    module: {
        loaders,
    },

    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
};
