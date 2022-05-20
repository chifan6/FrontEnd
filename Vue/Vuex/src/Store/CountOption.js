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
};

export default CountOption