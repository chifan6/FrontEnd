const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/js/main.js",
    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist/js"),
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                },
            },
        ],
    },

    devServer: {
        static:{
            directory:path.join("./dist")
        }
    },
};
