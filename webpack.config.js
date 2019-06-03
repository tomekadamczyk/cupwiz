const path = require('path');

module.exports = {
    entry: {main: './assets/js/script.js'},
    output: {
        path: path.resolve(__dirname, 'public/dist/js'),
        filename: 'script.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/transform-runtime']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/dist/js/'
      }
}
