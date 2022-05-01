<template>
  <div id="root">
    <!--    使用ref-->
    <h1 ref="h1">this is h1</h1>
    <button @click="showMsg">点我显示上方信息</button>
    <School ref="sch"></School>
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student
  },
  methods:{
    showMsg(){
      console.log(this);
      console.log(this.$refs.h1)
      console.log(this.$refs.sch)
    }
  }
}
</script>
