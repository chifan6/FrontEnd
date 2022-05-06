<template>
  <li>
    <label>
      <!--下面的方法修改了props不推荐使用-->
      <!--<input type="checkbox" v-model="todo.done" />-->
      <input type="checkbox" :checked="todo.done" @change="ChangeDone(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Itme",
  props: ["todo","ChangeDone","delTodo"],
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