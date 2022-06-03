<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
<!--        <router-link :to="`/home/message/details?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>-->
        <router-link :to="{
          name: `details`,
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
        </router-link>&nbsp;&nbsp;
      </li>
      <hr>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        {id: "001", title: "message1"},
        {id: "002", title: "message2"},
        {id: "003", title: "message3"}
      ]
    }
  }
}
</script>

<style scoped>

</style>