<template>
  <div class="row">
    <div class="col-xs-offset-2 col-xs-8">
      <div class="page-header"><h2>Vue Router Demo</h2>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
        <button @click="forwardTwo">向前两步</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    forward() {
      this.$router.forward()
    },
    back() {
      this.$router.back()
    },
    forwardTwo(){
      this.$router.go(2)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>