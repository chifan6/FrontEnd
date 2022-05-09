<template>
  <li>
    <label>
      <!--下面的方法修改了props不推荐使用-->
      <!--<input type="checkbox" v-model="todo.done" />-->
      <input type="checkbox" :checked="todo.done" @change="ChangeDone"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo">删除</button>
  </li>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: "Itme",
  props: ["todo"],
  methods: {
    ChangeDone() {
      // this.ChangeDone(this.todo.id)
      this.$bus.$emit("ChangeDone", this.todo.id)
    },
    delTodo() {
      // this.delTodo(this.todo.id)
      //使用全局事件总线
      // this.$bus.$emit("delTodo",this.todo.id)
      //发布消息
      PubSub.publish("delTodo", this.todo.id);
    }
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #f0f5ff;
}

li:hover button{
  display: block;
}
</style>