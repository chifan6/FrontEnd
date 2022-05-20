import Vuex from "vuex";
import Vue from "vue";

import CountOption from "@/Store/CountOption";
import TodosOption from "@/Store/TodosOption";

//由于import会先将要导入的文件先执行一遍
//如果在App.vue中执行Vue(Vuex)会先执行现在这个文件
//所以需要在store文件中使用Vue(Vuex)，而不是在App.vue中使用
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        CountOption,
        TodosOption
    }
})

export default store

