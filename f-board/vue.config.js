module.exports = {
    publicPath: '/board/',
    devServer: {
        historyApiFallback: true,
        proxy: {
            '^/': {
                target: 'https://toyboard.herokuapp.com',
                changeOrigin: true
            }
        },
    }
}