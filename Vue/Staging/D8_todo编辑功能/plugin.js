import dayjs from "dayjs"
export default {
    install(Vue) {
        Vue.filter("demo", function (value) {
            return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
        });
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        });
        Vue.prototype.$test = function (){
            console.log("test")
        }
    }
}