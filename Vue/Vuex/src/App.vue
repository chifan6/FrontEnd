<template>
  <div>
    <Count/>
  </div>
</template>

<script>
import Count from "./components/Count";
import store from "./Store"
export default {
  name: 'App',
  store,
  components: {
    Count
  }
}
</script>

<style>
</style>
