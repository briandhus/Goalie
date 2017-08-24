module.exports = {
    entry: "./app/app.jsx",
    output: {
        filename: "public/bundle.js"
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
    externals: [
        {googleapis: 'commonjs googleapis'}
    ],
    devtool: "eval-source-map"
}