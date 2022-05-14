<template>
  <div>
  <button @click="isShow = !isShow">
    显示/隐藏
  </button>
  <transition name="fade" appear>
    <h1 v-if="isShow">This is Transition</h1>
  </transition>
</div>
</template>

<script>
export default {
  name: "transi",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
}

.fade-enter-active{
  animation: demo 1s;
}

.fade-leave-active{
  animation: demo 1s reverse;
}

@keyframes demo {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0);
  }
}
</style>