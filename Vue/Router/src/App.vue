<template>
  <div>
    <Banner/>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" :to="{name:`about`}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>

<style>
* {
  color: #003366;
}

button {
  border: #0b2c89 1px solid;
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
</style>
