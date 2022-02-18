module.exports = {
    publicPath: '/board/',
    devServer: {
        proxy : {
            '^/':{
                target: 'http://localhost:3001',
                changeOrigin: true
            }
        }
    }
}