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
    devtool: "eval-source-map"
}