<template>
  <div>
    <h2>The current sum is zero：{{count}}</h2>
    <h3>The sum is magnified 10 times：{{bigCount}}</h3>
    <h4>today's weather：{{weather}}</h4>
<!--    <h4>mood：{{mood}}</h4>-->
    <h4 style="color: #990033">The length of the Todos component is：{{todos.length}}</h4>
    <select v-model="typeInfo">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add(typeInfo)">+</button>
    <button @click="minus(typeInfo)">-</button>
    <button @click="addOdd(typeInfo)">oddAdd</button>
    <button @click="asyncAdd(typeInfo)">asyncAdd</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";
export default {
  name: "Count",
  data() {
    return {
      typeInfo:1
    }
  },
  computed: {
    /*count() {
      return this.$store.state.count;
    },
    weather() {
      return this.$store.state.weather;
    },*/
    //^^
    //||
    //||
    // ...mapState({count:"count",weather:"weather"}),
    ...mapState("CountOption",['count','weather']),
    ...mapState("TodosOption",['todos']),

    /*bigCount() {
      return this.$store.getters.bigCount;
    },
    mood() {
      return this.$store.getters.mood;
    }*/
    //^^
    //||
    //||
    // ...mapGetters({bigCount:"bigCount",mood:"mood"}),
    ...mapGetters("CountOption",["bigCount","mood"])
  },
  methods: {
    /*add() {
      //提交到mutations跳过actions
      this.$store.commit("ADD", this.typeInfo)
    },
    minus() {
      this.$store.commit("MINUS", this.typeInfo)
    },*/
    //^^
    //||
    //||
    ...mapMutations("CountOption",{add: "ADD",minus:"MINUS"}),
    /*addOdd() {
      //分发addOdd actions
      this.$store.dispatch("addOdd", this.typeInfo)
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd", this.typeInfo)
    },*/
    //^^
    //||
    //||
    // ...mapActions({addOdd:"addOdd",asyncAdd:"asyncAdd"}),
    ...mapActions("CountOption",["addOdd","asyncAdd"])
  }
}
</script>

<style scoped>
button{
  margin-left: 5px;
}
</style>