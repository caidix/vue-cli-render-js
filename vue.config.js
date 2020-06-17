const path = require('path');
const entry = require('./config/pages');

const config = {
  outputDir: 'publish',
  // assetsDir: 'static'
  css: {
    sourceMap: true,
    extract: {
      filename: 'css/[name].css' // 将组件中的 CSS 提取至一个独立的 CSS 文件中
    }
  },
  configureWebpack: {
    entry,
    output: {
      filename: 'js/[name].js',
      libraryTarget: 'umd'
    }
  },
  chainWebpack: config => {
    config.optimazation.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
    config.resolve.alias
      .set('src', path.resolve('src'))
      .set('@', path.resolve('src/components'))
  }
};

module.exports = config;