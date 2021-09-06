<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  width: 90%;
  margin: auto auto;
}
</style>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

export default {
  name: 'App',
}
</script>