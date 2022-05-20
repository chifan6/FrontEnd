const TodosOption = {
    namespaced: true,
    actions: {
        addE(context, value) {
            if (value.title.charAt(0) === "e") {
                context.commit("addTodo", value)
            } else {
                alert("Please enter todo at the beginning of e")
            }
        }
    },
    mutations: {
        addTodo(context, todoObj) {
            context.todos.unshift(todoObj);
        }
    },
    getters: {
        FirstName(state) {
            return state.todos[0].title
        }
    },
    state: {
        todos: [
            {id: "001", title: "eat"},
        ]
    }
};

export default TodosOption;