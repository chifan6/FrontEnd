const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/entry.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            //告诉webpack不要使用箭头函数
            arrowFunction: false,
            const:false,
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins: [
                                    [
                                        //使用插件
                                        "postcss-preset-env",
                                        //兼容到哪个版本
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        //使用加载器
                        loader: "babel-loader",
                        //选项
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        //兼容到哪个浏览器
                                        targets: {"chrome": "70", "ie": "8"},
                                        //使用corejs哪个版本
                                        "corejs": "3",
                                        //按需加载 如果用到promise就加载promise
                                        "useBuiltIns": "usage"
                                    },
                                ],
                            ],
                        },
                    },
                    "ts-loader"
                ],
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
        static: {
            directory: path.join("./dist")
        }
    },

    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "test",
            //引入一个网页模板来生成
            template: "./src/index.html"
        })
    ]
};
