<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld2 v-model:msg="msg"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HelloWorld2
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
