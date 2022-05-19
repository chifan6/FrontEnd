<template>
  <div id="root">
    <Count/>
    <hr>
    <Todos/>
  </div>
</template>

<script>
import Count from "./components/Count";
import Todos from "./components/Todos";

import store from "./Store"

export default {
  name: 'App',
  store,
  components: {
    Count,
    Todos
  }
}
</script>

<style>
* {
  color: #003366;
}

button {
  border: #5bc0de 1px solid;
  background-color: #00b3ee;
}

button:hover {
  border: #5bc0de 1px solid;
  background-color: #00aa00;
}

body {
  background-repeat: no-repeat;
  background-size: 1920px 960px;
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}

#root {
  width: 500px;
  margin: 0 auto;
}
</style>
