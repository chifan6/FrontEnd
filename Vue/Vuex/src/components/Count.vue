<template>
  <div>
    <h2>当前的求和为：{{$store.state.count}}</h2>
    <select v-model="typeInfo">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="addOdd">奇数加</button>
    <button @click="asyncAdd">异步加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      typeInfo:1
    }
  },
  methods: {
    add() {
      //提交到mutations跳过actions
      this.$store.commit("ADD", this.typeInfo)
    },
    minus() {
      this.$store.commit("MINUS", this.typeInfo)
    },
    addOdd() {
      //分发addOdd actions
      this.$store.dispatch("addOdd", this.typeInfo)
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd", this.typeInfo)
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 5px;
}
</style>