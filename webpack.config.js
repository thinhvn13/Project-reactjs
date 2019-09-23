// import path from 'path';

const path = require("path");
// export default {
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src','app'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        //using react router
        historyApiFallback: true
    },
    // determine file compile
    module: {
        rules: [{
            test: [/\.jsx?/,/\.js?/],
            loader:'babel-loader',
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: [/\.jpg/,/\.png/],
            loaders: ['file-loader']
        }
    ]
    }
}