const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}