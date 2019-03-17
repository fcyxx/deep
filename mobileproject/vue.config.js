const webpack = require("webpack");
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    css: {
        loaderOptions: {
            sass: {
                data: '@import "./src/assets/px2rem.scss";'
            }
        }
    }
}