<template>
  <GMapLoader @mapInitialized="addInitMarkers" @newMarker="addMarker">
    <template v-slot:default="{ google, map }">
      <MapMarker 
      v-for="marker in markers" 
      :key="marker.id" 
      :name="marker.name"
      :position="marker.position" 
      :google="google" 
      :map="map" />
    </template>
  </GMapLoader>
</template>

<script>
  import { mapState } from 'vuex'

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
        markers: []
      };
    },
    methods: {
      addInitMarkers(userPosition) {
        this.addUserMarker(userPosition);

        for(let i=0; i<this.restaurants.length; i++)
          this.addMarker(this.restaurants[i]);
      },
      addUserMarker(position) {
        this.markers.push({
          position: position,
          id: 'user',
          name: 'Utilisateur'
        });
      },
      addMarker(restaurant) {
        this.markers.push({
          position: {
            lat: restaurant.lat,
            lng: restaurant.long
          },
          id: restaurant.id, 
          name: restaurant.restaurantName
        });
      }
    },
    computed: {
      ...mapState({
        restaurants: state => state.restaurantsList.restaurants
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>