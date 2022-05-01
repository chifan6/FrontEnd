import Vue from 'vue'
import App from './App.vue'
import {mixin} from "./mixins"


Vue.config.productionTip = false
Vue.mixin(mixin)

new Vue({
    el: "#app",
    render: h => h(App),
});
