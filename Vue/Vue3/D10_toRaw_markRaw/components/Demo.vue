<template>
  <h4>{{ person }}</h4>
  <h1>Vue3 demo</h1>
  <h3>name: {{ person.name }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>job1 salary: {{ job.j1.salary }}</h3>
  <h3>job2 salary: {{ job.j2.salary }}</h3>
  <h4 v-show="car">car:{{ car }}</h4>
  <button @click="person.j1.salary += 1000">+1000</button>&nbsp;
  <button @click="job.j2.salary += 2000">+2000</button>
  <button @click="person.name += '~'">change the name</button>&nbsp;
  <button @click="age += 1">change the age</button>
  <button @click="addCar">addCar</button>
  <button @click="car.price++">add price</button>
</template>

<script>
import {reactive, toRefs, toRaw, markRaw, onMounted, isReactive} from "vue";

export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "joke",
      age: 18,
      car: "",
      job: {
        j1: {
          salary: 1000
        },
        j2: {
          salary: 2000
        }
      }
    });

    function addCar() {
      const car = {name: "gtr", price: 100}
      //将响应式的对象设置为非响应式
      // 时会为响应式对象不需要则使用
      person.car = markRaw(car)
    }

    onMounted(() => {
      console.log(isReactive(person.car));
    })
    return {
      person,
      ...toRefs(person),
      addCar
    };

  }
}
</script>

<style scoped>

</style>