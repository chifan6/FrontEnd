<template>
  <div>
    <h5>id:{{id}}</h5>
    <h5>title:{{title}}</h5>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: ["id", "title"],
  mounted() {
    console.log(this.$router)
  }
}
</script>

<style scoped>

</style>