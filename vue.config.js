const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@styles', resolve('src/assets/styles'))
      .set('@common', resolve('src/common'))
  },
  devServer: {
    // Paths
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
