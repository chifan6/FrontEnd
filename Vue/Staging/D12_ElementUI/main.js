import Vue from "vue";
import App from "./App";
// import ElementUI from "element-ui";
import {Col,Row,Button} from "element-ui";
Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Button.name, Button);
new Vue({
    render: h => h(App),
}).$mount("#app")
