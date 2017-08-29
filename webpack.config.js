var webpack = require('webpack')
module.exports = {
    entry: "./app/app.jsx",
    output: {
        filename: "public/bundle.js",
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: /app/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    externals: [
        {googleapis: 'commonjs googleapis'}
    ],
    devtool: "cheap-module-source-map"
}