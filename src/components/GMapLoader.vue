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
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'GMapLoader',
    data: function() {
      return {
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
        const coords = {
          lat: e.latLng.lat(),
          long: e.latLng.lng()
        };

        let _this = this;

        this.geocoder.geocode({
          location: {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        }, function(results, status){
          console.log(results);
          console.log(status);

          _this.setPositionNewRestaurantInfos({
            address: results[0].formatted_address,
            coords: coords
          });
          _this.toggleNewRestaurant(true);
        });
      },
      ...mapActions('restaurantsList', ['toggleNewRestaurant', 'setPositionNewRestaurantInfos'])
    },
    computed: {
      ...mapState(['googleApiKey'])
    },
    async mounted() {
      const loader = new Loader({
        apiKey: this.googleApiKey
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