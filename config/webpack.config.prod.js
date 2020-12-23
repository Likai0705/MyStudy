const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
    mode:'production',
    stats: {children: false, warnings: false}, // 不输出日志
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                warnings: false,
                compress: {
                    warnings: false,
                    drop_console: false,
                    dead_code: true,
                    drop_debugger: true
                },
                output: {
                    comments: false,
                    beautify: false,
                },
                mangle: true,
                },
                parallel: true,
                // sourceMap: false
            })
        ],
        splitChunks: {
            cacheGroups: {
              commons: {
                name: 'commons',
                chunks: 'initial',
                minChunks: 2
              }
            }
          }
    }
})

module.exports = webpackConfig