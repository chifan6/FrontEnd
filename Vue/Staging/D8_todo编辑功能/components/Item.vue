<template>
  <li>
    <label>
      <!--下面的方法修改了props不推荐使用-->
      <!--<input type="checkbox" v-model="todo.done" />-->
      <input type="checkbox" :checked="todo.done" @change="ChangeDone"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
          type="text"
          :value="todo.title"
          v-show="todo.isEdit"
          @blur="isBlur(todo,$event)"
          @keyup.e.enter="isBlur(todo,$event)"
          ref="focus"
      >
    </label>
    <button class="btn btn-danger" @click="delTodo">删除</button>
    <button class="btn btn-edit" @click="ChangEdit(todo)">编辑</button>
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
    },
    ChangEdit(todo) {
      //判断todo中是否存在isEdit属性
      //不能使用todo.isEdit的判断方法 因为如果有的话isEdit的值默认为false会导致没有效果
      if (todo.hasOwnProperty("isEdit")){
          todo.isEdit = true
      }else {
        this.$set(todo, "isEdit", true)
      }
      //自动获取焦点
      //Vue在函数执行完函数体的内容才会重新渲染模板
      //当执行到获取焦点是还没有进行渲染输入框
      //this.$refs.focus.focus()

      //$nextTick会在DOM元素渲染后调用
      this.$nextTick(function (){
        this.$refs.focus.focus();
      })
    },
    isBlur(todo,e){
      //将内容显示到页面
      todo.isEdit = false;
      if(!(e.target.value.trim())) return alert("修改不能为空!")
      todo.title = e.target.value;
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