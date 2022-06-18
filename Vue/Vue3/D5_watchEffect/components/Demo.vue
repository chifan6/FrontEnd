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
import {ref, reactive, watchEffect} from "vue";

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
    //监视ref的响应
   /* watch([name, age], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    watch(() => [job.j1, job.j2], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, {deep: true});*/

    //该api中使用到了哪个数据就监视哪个数据
    //当api中的数据发生变化是会调用该api
    watchEffect(()=>{
      let test = job.j1.salary
      console.log("回调被执行了")
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