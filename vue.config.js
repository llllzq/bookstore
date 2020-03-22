const path = require('path')
const apiMocker = require('webpack-api-mocker')

module.exports = {
  devServer: {
    before (app) {
    //    注意，此处引用的是自定义的接口文件
      apiMocker(app, path.resolve('./mocker/index.js'), {
        proxy: {
          '/repos/*': 'https://api.github.com/'
        },
        changeHost: true
      })
    }
  }
}
