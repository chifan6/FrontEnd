<template>
  <div>
    <h4 style="color: #990033">The sum of the count component is：{{count}}</h4>
    <input
        type="text"
        placeholder="Please enter your task name and press Enter to confirm"
        size="60"
        v-model="typeInfo"
        @keyup.enter="addTodo"
    />
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.title}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
  name: "Todos",
  data() {
    return {
      typeInfo: ""
    }
  },
  methods: {
    addTodo() {
      const todoObj = {id: nanoid(), title: this.typeInfo};
      this.$store.state.todos.unshift(todoObj);
      this.typeInfo = "";
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    count() {
      return this.$store.state.count
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style scoped>

</style>