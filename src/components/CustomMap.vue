<template>
    <GMapLoader @mapInitialized="addUserMarker">
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
      addUserMarker(position) {
        this.markers.push({
          position: position,
          id: 'user',
          name: 'Utilisateur'
        });
      }
    },
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>