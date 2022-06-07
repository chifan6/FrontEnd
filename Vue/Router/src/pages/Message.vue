<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!--使用to的字符串方式发送query参数-->
        <!--        <router-link :to="`/home/message/details?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>-->
        <!--使用to的字符串方式发送params参数-->
        <!--        <router-link :to="`/home/message/details/${m.id}/${m.title}`">{{ m.title }}</router-link>-->
        <router-link :to="{
          /*使用to的对象方式发送参数不能使用path只能使用name属性*/
                  name: `details`,
                  query:{
                    id:m.id,
                    title:m.title
                  }
                }">
          {{ m.title }}

        </router-link>&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
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
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: `details`,
        query: {
          id: m.id,
          title: m.title
        }
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: `Message`,
        query: {
          id: m.id,
          title: m.title
        }
      })
    }
  },
  beforeDestroy() {
    console.log("Message组件即将被销毁")
  },
  //路由守卫钩子(生命周期钩子)
  //通过路由来到此组件之前调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuthorization) {
      if (localStorage.username === "mouk") {
        next()
      } else {
        alert("用户名错误！")
      }
    } else {
      next()
    }
  },
  //即将离开切换到其他组件式调用
  beforeRouteLeave(to, from, next) {
    next()
  }
}
</script>

<style scoped>
* {
  color: black;
}
</style>