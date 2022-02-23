module.exports = {
    publicPath: '/board/',
    devServer: {
        historyApiFallback: true,
        proxy: {
            '^/': {
                target: 'http://localhost:3001',
                changeOrigin: true
            }
        },
    }
}