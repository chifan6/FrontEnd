<template>
  <div class="card">
    <h3 class="title">{{ title }}</h3>
    <!--    默认插槽-->
    <slot></slot>
    <!--  具名插槽  -->
    <slot name="films"></slot>
    <!--作用域插槽-->
    <!--向插槽的使用者（父组件）传递参数-->
    <slot name="tests" :tests="tests" :test2="tests2"></slot>

    <!--插槽默认配置-->
    <slot name="video">
      <h6>如果没又使用到该插槽则会使用默认的配置</h6>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      tests: ["test1", "test2", "test3", "test4"],
      tests2: ["test5"]
    }
  }
}
</script>

<style scoped>
.card {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  float: left;
  margin-left: 20px;
}

.title {
  background-color: orange;
  margin-top: 20px;
  text-align: center;
  line-height: 40px;
}
</style>