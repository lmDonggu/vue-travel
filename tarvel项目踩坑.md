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



