<template>
  <h1>Vue3 demo</h1>
  <h2>name: {{ name }}</h2>
  <h2>age: {{ age }}</h2>
  <h2>job1 salary: {{ job.j1.salary }}</h2>
  <h2>job2 salary: {{ job.j2.salary }}</h2>
  <br>
  <button @click="test">点击测试</button>
  <br>
  <br>
  <button @click="job.j1.salary += 1000">+1000</button>
  <br>
  <br>
  <button @click="job.j2.salary += 2000">+2000</button>
</template>

<script>
import {ref, reactive, watch} from "vue";

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
    watch([name, age], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    /*监视reactive的响应
    *   1、oldValue和newValue不能使用，结果相同,deep是强制激活的
    *   2、监视一个属性需要使用函数，返回值是需要监视的属性，需要深度监视要开启deep.不会出现oldValue和newValue结果不同的问题
    *   3、监视多个属性需要使用数组或函数，数组是一个一个函数，函数的返回值是需要监视的属性或使用函数返回值是一个数组，需要深度监视要开启deep，oldValue和newValue不能使用，结果相同
    *  */
    /*watch(job,(newValue, oldValue)=>{
      console.log(newValue, oldValue);
    })*/
    /*watch(() => job.j1, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, {deep: true});*/
    watch(() => [job.j1, job.j2], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, {deep: true});

    function test() {
      name.value = "tom";
      age.value = 20;
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

<style scoped>

</style>