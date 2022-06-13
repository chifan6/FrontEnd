<template>
  <h1>Vue3 demo</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h2>job salary: {{job.type}}</h2>
  <h2>job salary: {{job.salary}}</h2>
  <br>
  <button @click="test">点击测试</button>
  <br>
</template>

<script>
import {ref,reactive,computed} from "vue";
export default {
  name: 'App',
  setup(){
    let name = ref("joke");
    let age = ref(18);
    let job = reactive({
      type: "title",
      salary: 1000
    });

    function test() {
      console.log(job)
    }
    return {
      name,
      age,
      job,
      test
    };
  }
}
</script>
