<template>
  <h1>Vue3 demo</h1>
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>job1 salary: {{ job.j1.salary }}</h3>
  <h3>job2 salary: {{ job.j2.salary }}</h3>
  <button @click="job.j1.salary += 1000">+1000</button>&nbsp;
  <button @click="job.j2.salary += 2000">+2000</button>
  <hr>
  <span>当前X为：{{ PagePosition.pageX }}</span>&nbsp;
  <span>当前Y为：{{ PagePosition.pageY }}</span>
</template>

<script>
import {ref, reactive} from "vue";
import usePagePosition from "@/Hook/usePage";

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
    let PagePosition = usePagePosition()

    return {
      name,
      age,
      job,
      PagePosition
    };

  }
}
</script>

<style scoped>

</style>