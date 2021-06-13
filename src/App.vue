<template>
  <div id="main-holder">
    <RestaurantsList 
    v-on:click="addNewRestaurant" />
    <CustomMap />
    <ModalRestaurant v-if="showModal"/>
  </div>
</template>

<script>
  import CustomMap from './components/CustomMap.vue'
  import RestaurantsList from './components/RestaurantsList.vue'
  import ModalRestaurant from './components/ModalRestaurant.vue'

  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'App',
    components: {
      CustomMap,
      RestaurantsList,
      ModalRestaurant
    },
    methods: {
      addNewRestaurant() {
        // this.addRestaurant({
        //   "restaurantName":"Test",
        //   "address":"rue test",
        //   "lat":48.8737614,
        //   "long":2.3501699,
        //   "ratings":[]
        // });
      },
      ...mapActions(['addRestaurant'])
    },
    computed: {
      ...mapState(['showModal'])
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
    color: #2c3e50;
  }

  #main-holder{
    display: flex;
    height: 100vh;
  }
</style>
