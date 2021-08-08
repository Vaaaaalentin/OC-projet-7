<template>
  <GMapLoader ref="loader" @mapInitialized="addInitMarkers" @sortVisibleRestaurants="sortVisibleRestaurants" @newMarker="addMarker">
    <template v-slot:default="{ google, map }">
      <MapMarker 
      v-for="marker in markers" 
      :key="marker.id" 
      :name="marker.name"
      :id="marker.id"
      :position="marker.position" 
      :google="google" 
      :map="map" />
    </template>
  </GMapLoader>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import MapMarker from './MapMarker.vue'
  import GMapLoader from './GMapLoader.vue'

  export default {
    name: 'CustomMap',
    components: {
      MapMarker,
      GMapLoader
    },
    data: function() {
      return {
      };
    },
    methods: {
      addInitMarkers(userPosition) {
        this.addUserMarker(userPosition);

        for(let i=0; i<this.restaurants.length; i++)
          this.addRestaurantMarker(this.restaurants[i]);
      },
      addUserMarker(position) {
        const user = {
          position: position,
          id: 'user',
          name: 'Utilisateur'
        };

        this.addMarker(user);
      },
      addRestaurantMarker(restaurant) {
        const restaurantInfos = {
          position: {
            lat: restaurant.lat,
            lng: restaurant.long
          },
          id: restaurant.id, 
          name: restaurant.restaurantName
        };

        this.addMarker(restaurantInfos);
      },
      sortVisibleRestaurants() {
        const restaurants = this.restaurants;
        const mapBounds = this.$refs.loader.map.getBounds();

        restaurants.forEach((restaurant) => {
          const isInBound = mapBounds.contains({
            lat: restaurant.lat,
            lng: restaurant.long
          });
          
          this.setRestaurantVisibility({
            id: restaurant.id,
            visibility: isInBound
          });

          console.log(this.restaurants);
        });
      },
      ...mapActions('map', ['addMarker', 'removeMarker']),
      ...mapActions('restaurantsList', ['setRestaurantVisibility'])
    },
    computed: {
      ...mapState({
        restaurants: state => state.restaurantsList.restaurants,
        markers: state => state.map.markers
      })
    },
    mounted() {
      console.log('CustomMap component mounted');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>