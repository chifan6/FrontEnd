<template>
  <h4>{{person}}</h4>
  <h1>Vue3 demo</h1>
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>job1 salary: {{ job.j1.salary }}</h3>
  <h3>job2 salary: {{ job.j2.salary }}</h3>
  <button @click="job.j1.salary += 1000">+1000</button>&nbsp;
  <button @click="job.j2.salary += 2000">+2000</button>
  <button @click="name += '~'">change the name</button>&nbsp;
  <button @click="age += 1">change the age</button>
</template>

<script>
import {reactive, toRef, toRefs,readonly,shallowReadonly} from "vue";

export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "joke",
      age: 18,
      job: {
        j1: {
          salary: 1000
        },
        j2: {
          salary: 2000
        }
      }
    });
    //此时的person为只读状态不能进行修改
    // person = readonly(person)
    // 此时的person.的这一层为只读状态不能进行修改,person.xx.xx后面的数值可以修改
    // person = shallowReadonly(person)
    return {
      person,
      name: toRef(person, "name"),
      age: toRef(person, "age"),
      ...toRefs(person)
    };

  }
}
</script>

<style scoped>

</style>