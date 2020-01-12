const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const webpack = require('webpack');

module.exports = withCSS(withSass({
    exportPathMap: function() {
        return {
            '/': { page: '/' }
        };
    },
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        return config
    }
}));
