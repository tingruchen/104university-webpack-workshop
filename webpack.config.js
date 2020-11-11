const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: {
        main: ["./src/index.js", "./src/hover.scss"],
        // footer: "./src/footer.js",
        // component: "./src/libs/component.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        // library: "myComponent",
        // libraryTarget: "var"
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 7890,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "myFirstApp",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    // devtool: "inline-source-map",
    externals: {
        // jquery: 'jQuery'
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};

module.exports = (env, argv) => {
    console.log(env, argv);
    if (argv.mode === "production") {
        config.devtool = "inline-source-map";
    } else if (argv.mode === "development") {

    }
    return config;
}
