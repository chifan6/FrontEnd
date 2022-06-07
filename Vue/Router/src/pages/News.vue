<template>
  <div>
    <ul>
      <li :style="{opacity}">Vue</li>
      <li v-for="n in news" :key="n.id">{{ n.title }} <input type="text"></li>
    </ul>
  </div>


</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: [
        {id: "001", title: "news001"},
        {id: "002", title: "news002"},
        {id: "003", title: "news003"},
      ],
      opacity: 1
    }
  },
/*  mounted() {
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01
      if (this.opacity <= 0){
        this.opacity = 1
      }
    },16)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    console.log("News组件即将被销毁")
  }*/
  //路由组件的生命周期
  //通过路由进入到该组件时调用activated
  //离开组件之前会调用deactivated
  activated() {
    this.timer = setInterval(() => {
      // console.log("@");
      this.opacity -= 0.01
      if (this.opacity <= 0) {
        this.opacity = 1
      }
    }, 16)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>