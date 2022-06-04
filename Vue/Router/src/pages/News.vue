<template>
  <div>
    <ul>
      <li v-for="n in news" :key="n.id">{{n.title}} <input type="text"></li>
    </ul>
  </div>


</template>

<script>
export default {
  name: "News",
  data(){
    return {
      news: [
        {id: "001", title: "news001"},
        {id: "002", title: "news002"},
        {id: "003", title: "news003"},
      ]
    }
  },
  beforeDestroy() {
    console.log("News组件即将被销毁")
  }
}
</script>

<style scoped>

</style>