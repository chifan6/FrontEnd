<template>
  <div>
    <School/>
    <Student/>
    <button @click="showMsg">点击事件</button>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components:{
    School,
    Student
  },
  methods:{
    showMsg(){
      console.log(this)
    }
  }
}
</script>

<style scoped>

</style>