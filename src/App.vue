<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
import store from './store/index'

export default {
  components: {
    navbar
  }
}
</script>
