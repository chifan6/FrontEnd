import Vuex from "vuex";
import Vue from "vue";
//由于import会先将要导入的文件先执行一遍
//如果在App.vue中执行Vue(Vuex)会先执行现在这个文件
//所以需要在store文件中使用Vue(Vuex)，而不是在App.vue中使用
Vue.use(Vuex);

const CountOption = {
    namespaced: true,
    actions: {
        //需要进行逻辑的写在actions中
        addOdd(context, value) {
            if (context.state.count % 2) {
                context.commit("ADD", value)
            }
        },
        asyncAdd(context, value) {
            setTimeout(() => {
                context.commit("ADD", value)
            }, 500)
        }
    },
    mutations: {
        ADD(state, value) {
            state.count += value
        },
        MINUS(state, value) {
            state.count -= value
        },
    },
    getters: {
        bigCount({count}) {
            return count * 10
        },
        mood() {
            return "Good"
        }
    },
    state: {
        count: 0,
        weather: "Cloudy",
    }
}
const TodosOption = {
    namespaced: true,
    actions: {},
    mutations: {},
    getters: {},
    state: {
        todos: [
            {id: "001", title: "eat"},
        ]
    }
}

const store = new Vuex.Store({
    modules:{
        CountOption,
        TodosOption
    }
})

export default store

