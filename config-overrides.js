const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = function override(config, env) {
    if (env === 'production') {
        const addOptions = {
            inlineSource: '.(js|css)$',
            inject: 'body'
        }
        Object.assign(
            config.plugins
                .find(plugin => Object.getPrototypeOf(plugin).constructor.name === 'HtmlWebpackPlugin')
                .userOptions,
            addOptions
        )
        config.plugins.push(new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin))
    }
    return config
}
