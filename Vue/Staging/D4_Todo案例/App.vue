<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :AddTodo="AddTodo"/>
        <List :todos="todos" :ChangeDone="ChangeDone" :delTodo="delTodo"/>
        <MyFooter :todos="todos" :changeAll="changeAll" :ClearDone="ClearDone"/>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/List";
import Item from "./components/Item";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

export default {
  name: "App",
  components: {
    Item,
    List,
    MyFooter,
    MyHeader
  },
  methods: {
    //添加一个todo
    AddTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //修改todo的完成状态
    ChangeDone(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    //删除一个todo
    delTodo(id) {
      if (confirm("确定要删除?")) {
        this.todos = this.todos.filter((todo) => {
          return todo.id !== id
        })
      }
    },
    //全选or不全选
    changeAll(isAll) {
      this.todos.forEach((todo) => {
        todo.done = isAll
      })
    },
    //清除已完成的todo
    ClearDone(){
      this.todos = this.todos.filter((todo)=>{
        return todo.done === false
      })
    }
  },
  data() {
    return {
      todos: [
        {id: "001", title: "title_1", done: true},
        {id: "002", title: "title_2", done: false},
        {id: "003", title: "title_3", done: true}
      ]
    }
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>