# extension-vue-template
`vue-cli3` + `webpack4` + `element-ui`  实现编译打包Chrome浏览器插件

### content 文件夹
作用于浏览网页，对打开的网页进行插入、修改 DOM ，对其进行操作交互

### options 文件夹
右键插件图标的选项页面

### popup 文件夹
点击插件图片的弹出页面

## 环境安装
```
yarn
```

### 开发环境编译并热更新
```
yarn serve
or
yarn build-watch
```
对修改文件进行实时编译并自动在根目录下生成 dist 文件夹，打开浏览器的`扩展程序`, 点`加载已解压的扩展程序`, 选择 dist 文件夹

### 生产环境打包
```
yarn build
```

### 分析包组件大小
```
yarn analyze
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
