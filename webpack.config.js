const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');
const NODE_MODULES = path.resolve(__dirname, 'node_modules');


const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin({filename: 'bundle.css', allChunks: true});


var config = {
    resolve: {
        modules: [
            APP_DIR, NODE_MODULES,
        ],
        alias:{

        },
        extensions:['.js', '.jsx', '.css']
    },
    entry: {
        layout1: APP_DIR + "index.jsx",
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [APP_DIR,],
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }, {
                test: /\.css$/,
                loader: extractCSS.extract({loader: ["css-loader","autoprefixer-loader?browsers=last 2 versions"]}),
            }, {
                test:/\.scss$/,
                loader: extractCSS.extract({loader: ["css-loader", "autoprefixer-loader?browsers=last 2 versions", "sass-loader"]})
            }
        ]
    },
    plugins:[
        extractCSS
    ]
};

module.exports = config;

