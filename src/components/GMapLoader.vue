<template>
    <div id="map" ref="map">
    </div>
    <template v-if="Boolean(google) && Boolean(map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
</template>

<script>
  import { Loader } from '@googlemaps/js-api-loader'
  import { mapSettings } from '@/constants/mapConfig'

  export default {
    name: 'GMapLoader',
    data: function() {
      return {
        apiKey: 'AIzaSyASVP7Y6sAiVPML4W4v2mAkcSjcQBdHQt0',
        google: null,
        map: null,
        loader: false
      };
    },
    methods: {
      initMap() {
        const mapContainer = this.$refs.map;
        this.map = new this.google.maps.Map(mapContainer, mapSettings);
      },
      setToUserPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          this.map.setCenter(coords);
          this.$emit('mapInitialized', coords);
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
      this.loaded = true;
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