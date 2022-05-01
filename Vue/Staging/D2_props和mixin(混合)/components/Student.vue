<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
// import {mixin} from "../mixins"
export default {
  name: "Student",
  data(){
    return {
      name: "jack",
      age: "19",
      sex:"male"
    }
  },
  // mixins:[mixin]
}
</script>

<style scoped>
  .demo{
    background-color: orange;
  }
</style>