<template>
  <Demo/>
</template>

<script>
import {ref,reactive,computed} from "vue";
import Demo from "./components/Demo";
export default {
  name: 'App',
  components:{
    Demo
  }
}
</script>
