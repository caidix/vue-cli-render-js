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
- 向后端上传打包的js、css文件
- 后端提供接口返回文件地址
- 借助知名库requirejs
```javascript
<template>
  <div id="#renderJS"></div>
</template>
import requirejs from 'requirejs';
import Vue from 'vue';
export default {
  data() {
    return { //假设
      jsUrl: 'xxx',
      cssUrl: 'xxx'
    }
  },
  methods: {
    renderMap() {
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = this.cssUrl;
      document.head.appendChild(link);
      requirejs([
        // js name
      ], root => {
        root.render(Vue, '#renderJS');
      })
    }
  }
}
```

## 补充 
我们知道，Vue在$mount构建前并未挂载到某个实例中，且在根实例中可以这么写：
```javascript
new Vue({
  el: '#CDCDCDCD',
  provide: {
    foo
  },
  data: {
    foo: 1
  },
  computed: {
    bar: function () { /* ... */ }
  },
  methods: {
    baz: function () { /* ... */ }
  }
})
```
我们也可以做更多的配置使父项目传入参数给js渲染的界面。比如：
index.js
```javascript
export default {
  createVue(opts) {
    return new Vue({
      ...opts,
    render: h => h(App)
    })
  },
  render(opts) {
    // 根据协定好的传入进行处理
    // opts = {
    //   el: 'xx',
    //   data:'xx'
    // }
    return this.createVue(opts);
  }
}

```