<template>
  <div id="main-holder">
    <RestaurantsList />
    <CustomMap />
  </div>
</template>

<script>
import CustomMap from './components/CustomMap.vue'
import RestaurantsList from './components/RestaurantsList.vue'

export default {
  name: 'App',
  components: {
    CustomMap,
    RestaurantsList
  }
}
</script>

<style>
body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main-holder{
  display: flex;
  height: 100vh;
}
</style>
