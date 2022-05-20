<template>
  <div>
    <h4 style="color: #990033">The sum of the count component is：{{count}}</h4>
    <h4>The first todo is：{{FirstName}}</h4>
    <button>Click Add Sleep</button>
    <br>
    <button @click="addE">Click todo to the beginning of e</button>
    <br>
    <br>
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
      this.$store.commit("TodosOption/addTodo", todoObj)
      this.typeInfo = "";
    },
    addE(){
      const todoObj = {id: nanoid(), title: this.typeInfo};
      this.$store.dispatch("TodosOption/addE", todoObj)
      this.typeInfo = "";
    }
  },
  computed: {
    todos() {
      return this.$store.state.TodosOption.todos;
    },
    count() {
      return this.$store.state.CountOption.count;
    },
    FirstName(){
      return this.$store.getters["TodosOption/FirstName"]
    }
  },
  mounted() {
    // console.log(this.$store)
  }
}
</script>

<style scoped>

</style>