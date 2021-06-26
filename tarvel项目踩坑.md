## stylus 和stylus-loader 报错

直接安装最新版本可能会导致报错

```js
npm install stylus --save
npm install stylus-load --save

// "stylus": "^0.54.5"
// "stylus-loader": "^3.0.2"
```

#### vue项目中出现Cannot find module 'stylus'错误的解决办法：

1.可以尝试卸载stylus和stylus-load依赖后重新安装到开发依赖

```js
npm install stylus --save-dev
npm install stylus-load --save-dev

// "stylus": "^0.54.5"
// "stylus-loader": "^3.0.2"
```

2.安装指定版本

```js
npm install stylus@0.52.4 --save-dev
npm install stylus-load@2.5.0 --save-dev

// "stylus": "^0.52.4"
// "stylus-loader": "^2.5.0"
```

:bell:目前项目使用的版本

```js
"devDependencies": {
  "stylus": "^0.54.8",
  "stylus-loader": "^3.0.2"
}
```

## 请求本地资源

本地请求时地址里不要写上`/public`

```js
// vue.config.js
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@styles', resolve('src/assets/styles'))
      .set('@common', resolve('src/common'))
  },
```



## Vue项目让局域网ip访问配置设置

第一步：修改config文件中找到 index.js 文件的host改成 ‘0.0.0.0’

```js
// vue.config.js
devServer: {
    // Paths
    host: '0.0.0.0',
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
```



第二步：检查 package.json 文件里进行配置，scripts.dev配置是否设置 host为‘0.0.0.0’

```js
// package.json
"scripts": {
  "serve": "vue-cli-service serve --host 0.0.0.0",
  "build": "vue-cli-service build",
  "lint": "vue-cli-service lint"
}
```



第三步：查看开发机的ip地址，并告诉给其他小伙伴，别忘了端口，通过在(微软)终端输入`ipconfig`

```md
// 例如
IPv4·············：192.168.1.182
```

第四步：使用ip加端口访问项目

```md
192.168.1.182:8080
```

## 打包上线