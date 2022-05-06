import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: "#app",
    render: h => h(App),
    //创建全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
});
