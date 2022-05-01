<template>
  <div class="demo">
    <h1>时间：{{time | demo}}</h1>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址: {{address}}</h2>
    <button @click="test">点击</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      time: Date.now(),
      name: "glnc",
      address: "gl"
    };
  },
  methods:{
    test(){
      this.$test()
    }
  }
}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>