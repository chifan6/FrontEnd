<template>
  <div>
    <h1 class="demo">{{name}}</h1>
    <button @click="showName">点我显示学校名称</button>
  </div>
</template>

<script>
export default {
  name:"School",
  data(){
    return {
      name:"glnc"
    }
  },
  methods:{
    showName(){
      console.log(this.name)
    }
  }
}
</script>

<style scoped>
  demo{
    width: 200px;
    height: 200px;
    background-color: pink;
  }
</style>