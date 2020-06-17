# vue-cli-render-js
> 基于vue-cli，分成多个页面为独立的模块进行打包编译成js文件，通过js渲染的形式引入到相应的项目中。

## 运行
- npm run serve
- npm run build

dev-server开启后编译地址为 端口号/js(css)/pageName.js(css)

## 本地编译使用方式
编译修改替换，可以使用Fiddler等拦截替换成本地地址进行编译。

## 优点
采用js渲染，不必在页面内开启多个部分时多次加载组件库等资源。

## 缺点
没有实时编译，需要人为手动刷新界面。
如果引入的项目Vue内没有js文件所需的一些js文件，则会报错。

## 使用方式
- 借助知名库requirejs
```javascript
import requirejs from 'requirejs';

export default {
  
}
```