<template>
  <div id="root">
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
#root{
  width: 500px;
  margin: 0 auto;
}
</style>
