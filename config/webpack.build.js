const path = require('path');
const webpack = require('webpack');

const name = process.argv[2]
let library = name.replace(/-(\w)/g, ($, $1) => {
    return $1.toUpperCase()
})

library = 'DM' + library.substr(0, 1).toUpperCase() + library.substr(1, library.length)

const config = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        [name]: path.resolve(__dirname, '../src/' + name + '/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist/' + name),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: library,
        libraryExport: 'default'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'to-string-loader',
                'css-loader',
                {
                    loader: 'resolve-url-loader'
                }
            ]
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'resolve-url-loader'
                },
                'less-loader'
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "url-loader"
        },
        {
            test: /\.[t|j]sx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    externals: {
        'omi': {
            commonjs: "omi",
            commonjs2: "omi",
            amd: "omi",
            root: "Omi"
        }
    },
}

webpack(config, (err, stats) => { // Stats Object
    if (err || stats.hasErrors()) {
        console.log(err, stats)
        // Handle errors here
    }
    // Done processing
});