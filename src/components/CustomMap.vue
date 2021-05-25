<template>
  <div id="map" ref="map">
    
  </div>
</template>

<script>
  import { Loader } from "@googlemaps/js-api-loader"

  export default {
    name: 'CustomMap',
    data: function() {
      return {
        apiKey: 'AIzaSyASVP7Y6sAiVPML4W4v2mAkcSjcQBdHQt0',
        mapConfig: {
          zoom: 14,
          disableDefaultUI: true
        },
        google: null,
        map: null
      };
    },
    methods: {
      initMap() {
        const mapContainer = this.$refs.map;
        this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
      },
      setToUserPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
          this.map.setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      }
    },
    async mounted() {
      const loader = new Loader({
        apiKey: this.apiKey
      });

      const api = await loader.load().then(function(){
        return window.google;
      });

      this.google = api;
      this.initMap();
      this.setToUserPosition();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map{
    width: 100%;
  }
</style>