<template>
  <h1>Vue3 demo</h1>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
  <h2>job1 salary: {{ job.j1.salary }}</h2>
  <h2>job2 salary: {{ job.j2.salary }}</h2>
  <br>
  <button @click="job.j1.salary += 1000">+1000</button>
  <br>
  <br>
  <button @click="job.j2.salary += 2000">+2000</button>
</template>

<script>
import {ref, reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";

export default {
  name: "Demo",
  setup() {
    let name = ref("joke");
    let age = ref(18);
    let job = reactive({
      j1: {
        salary: 1000
      },
      j2: {
        salary: 2000
      }
    });
    console.log("setup")
    onBeforeMount(()=>{
      console.log("onBeforeMount")
    })
    onMounted(()=>{
      console.log("onMounted")
    })
    onBeforeUpdate(()=>{
      console.log("onBeforeUpdate")
    })
    onUpdated(()=>{
      console.log("onUpdated")
    })
    onBeforeUnmount(()=>{
      console.log("onBeforeUnmount")
    })
    onUnmounted(()=>{
      console.log("onUnmounted")
    })
    return {
      name,
      age,
      job,
    };

  }
}
</script>

<style scoped>

</style>