<template>
  姓：<input type="text" placeholder="请输入姓" v-model="firstName">
  <br>
  名：<input type="text" placeholder="请输入名" v-model="lastName">
  <br>
  全称：<input type="text" v-model="fullName">
  <h2>姓：{{firstName}}</h2>
  <h2>名：{{lastName}}</h2>
  <h2>全称：{{fullName}}</h2>
  <br>
  <button @click="test">点击测试</button>
</template>

<script>
import {ref,computed} from "vue";
export default {
  name: "Demo",
  setup(){
    let firstName = ref("张");
    let lastName = ref("三");
    let fullName = computed({
      get() {
        return firstName.value + "-" + lastName.value
      },
      set(v){
        let fullName = v.split("-")
        firstName.value = fullName[0];
        lastName.value = fullName[1]
      }
    })
    function test() {
      console.log(fullName)
    }
    return {
      firstName,
      lastName,
      fullName,
      test
    }
  }
}
</script>

<style scoped>

</style>