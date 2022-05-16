<template>
  <div>
    <div class="container">
      <!--   默认插槽   -->
      <Category title="todos">
        <ul>
          <li v-for="(item,index) in todos" :key="index">{{ item }}</li>
        </ul>
      </Category>
      <!--具名插槽-->
      <Category title="电影">
        <template v-slot:films>
          <ul>
            <!--下方的方法slot已经弃用-->
            <!--slot="films"-->
            <li v-for="(item,index) in films" :key="index">{{ item }}</li>
          </ul>
        </template>
      </Category>
      <!--作用域插槽-->
                            <!--   接收子组件传递过来的属性   -->
      <Category title="测试" v-slot:tests="tests">
<!--        <template slot-scope="tests" slot="tests">-->
          <ul>
            <li v-for="(item,index) in tests.tests" :key="index">{{ item }}</li>
            <li v-for="item in tests.test2">{{ item }}</li>
          </ul>
<!--        </template>-->
      </Category>
    </div>
  </div>
</template>

<script>
import Category from "./components/Category"

export default {
  name: "App",
  components: {Category},
  data() {
    return {
      todos: ["吃饭", "睡觉", "打游戏", "学习"],
      films: ["title1", "title2", "title3", "title4"],

    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  width: 660px;
}

</style>