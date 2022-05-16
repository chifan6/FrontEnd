<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
            type="text"
            placeholder="enter the name you search"
            v-model="TypeInfo"
            @keyup.enter="getUser"
            ref="Type"
        />&nbsp;<button @click="getUser" >Search</button>
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
      if(!this.$refs.Type.value.trim()) return
      this.$bus.$emit("getInfo",{isFirst:false,isLoading:true,users: [],error:""})
      axios.get(`https://api.github.com/search/users?q=${this.TypeInfo}`).then(
          (response) => {
            // console.log(response.data.items);
            // this.$bus.$emit("getInfo", response.data.items)
            this.$bus.$emit("getInfo", {isFirst:false,isLoading:false,users: response.data.items})
          },
          (error) => {
            // console.log(error.message);
            this.$bus.$emit("getInfo", {isFirst:false,isLoading:false,users: [],error:error.message})
          }
      );
      //清空输入框
      this.TypeInfo = "";
    },
  }
}
</script>

<style scoped>

</style>