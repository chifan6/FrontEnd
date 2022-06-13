<template>
  <h1>Vue3 demo</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h2>job salary: {{job.type}}</h2>
  <h2>job salary: {{job.salary}}</h2>
  <button @click="say1">click say</button>
  <br>
  <br>
  <button @click="change">change say</button>
</template>

<script>
import {ref} from "vue";
export default {
  name: 'App',
  setup(){
    let name = ref("joke");
    let age = ref(18);
    let job = ref({
      type: "title",
      salary : 1000
    })
    function say1 (){
      alert(`my name is ${name.value},age ${age.value},
            job type ${job.value.type},salary ${job.value.salary}`);
    }
    function change (){
      name.value = "tom";
      age.value = 28;
      //job.value.salary.value X
      job.value.salary = 2000; //✔
      job.value.type = "title2"
      console.log(name,age,job)
    }
    return {
      name,
      age,
      say1,
      change,
      job
    }
  }
}
</script>
