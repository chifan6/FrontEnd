<template>
  <div class="row">
    <div class="card" v-for="info in info.users" :key="info.id">
      <a :href="info.html_url" target="_blank">
        <img
            :src="info.avatar_url"
            style="width: 100px"
        />
      </a>
      <p class="card-text">{{info.login}}</p>
    </div>
    <h1 v-show="info.isFirst">Welcome!</h1>
    <h1 v-show="info.isLoading">Loading....</h1>
    <h1 style="color: red">{{info.error}}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        //是否时第一次加载
        isFirst: true,
        //是否加载中
        isLoading: false,
        //错误信息
        error:""
      }
    }
  },
  mounted() {
    this.$bus.$on("getInfo",(info)=>{
      //使用ES6语法替换对象的方法，防止数据丢失，同时能保留该函数为纯函数
      this.info = {...this.info,...info}
    })
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
