<template>
  <div id="main-holder">
    <RestaurantsList />
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
      ...mapActions('restaurantsList', ['initRestaurantsList'])
    },
    mounted() {
      this.initRestaurantsList();
    },
    computed: {
      ...mapState({
        showModal: state => state.modal.showModal
      })
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

  .c-scrollbar{
    scrollbar-width: thin;
    scrollbar-color: #2c3e50 #efefef;
  }

  select, input{
    padding: 5px;
    font-size: 16px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 0px;
  }
</style>
