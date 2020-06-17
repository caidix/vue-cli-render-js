import 'src/libs/global.less'
import Main from 'main';

export function render(Vue, domId) {
  Vue.config.productionTip = false;
  return new Vue({
    render: h => h(Main)
  }).$mount(domId);
}