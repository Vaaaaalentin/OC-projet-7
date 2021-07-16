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
  import { mapActions } from 'vuex'

  export default {
    name: 'GMapLoader',
    data: function() {
      return {
        apiKey: 'AIzaSyASVP7Y6sAiVPML4W4v2mAkcSjcQBdHQt0',
        google: null,
        geocoder: null,
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
      },
      addRestaurantOnMap(e) {
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());

        this.toggleNewRestaurant(true);

        console.log(this.google);
        console.log(this.google.maps);
        console.log(this.google.maps.Geocoder);
        console.log(this.geocoder);

        this.geocoder.geocode({
          location: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        }, function(results, status){
          console.log(results);
          console.log(status);
        });
      },
      ...mapActions('restaurantsList', ['addRestaurant', 'toggleNewRestaurant'])
    },
    computed: {},
    async mounted() {
      const loader = new Loader({
        apiKey: this.apiKey
      });

      const api = await loader.load().then(function(){
        return window.google;
      });

      this.google = api;
      this.geocoder = new this.google.maps.Geocoder();
      this.loaded = true;
      this.initMap();
      this.setToUserPosition();


      this.map.addListener("click", this.addRestaurantOnMap);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map{
    width: 100%;
  }
</style>