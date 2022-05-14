<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
            type="text"
            placeholder="enter the name you search"
            v-model="TypeInfo"
        />&nbsp;<button @click="getUser($event)">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  // github地址：`https://api.github.com/search/users?q=xxxxxx`
  data() {
    return {
      TypeInfo: "",
    }
  },
  methods:{
    getUser() {
      axios.get(`https://api.github.com/search/users?q=${this.TypeInfo}`).then(
          (response) => {
            // console.log(response.data.items);
            this.$bus.$emit("getInfo", response.data.items)
          },
          (error) => {
            console.log(error.message);
          }
      );
      //清空输入框
      // this.TypeInfo = ""
    },
  }
}
</script>

<style scoped>

</style>