<template>
  <div id="map" ref="map">
  </div>
  <template v-if="Boolean(google) && Boolean(map)">
    <slot
      :google="google"
      :map="map"
    />

    <GPlacesAPI 
      ref="gPlacesApi"
      :places="places"
      :map="map"
    />
  </template>
</template>

<script>
  import GPlacesAPI from './GPlacesAPI.vue'

  import { Loader } from '@googlemaps/js-api-loader'
  import { mapSettings } from '@/constants/mapConfig'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'GMapLoader',
    components: {
      GPlacesAPI
    },
    data: function() {
      return {
        apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
        google: null,
        geocoder: null,
        places: null,
        map: null,
        loader: false
      };
    },
    methods: {
      initMap() {
        const mapContainer = this.$refs.map;
        this.map = new this.google.maps.Map(mapContainer, mapSettings);

        console.log('Map init');

        this.google.maps.event.addListenerOnce(this.map, 'idle', () => {
          this.map.addListener('idle', () => {
            this.$refs.gPlacesApi.addNearbyPlaces();
          });
        });

        this.map.addListener('click', this.addRestaurantOnMap);
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
        }, (results) => {
          _this.setPositionNewRestaurantInfos({
            address: results[0].formatted_address,
            coords: coords
          });
          _this.toggleNewRestaurant(true);
        });
      },
      ...mapActions('restaurantsList', ['toggleNewRestaurant', 'setPositionNewRestaurantInfos', 'addRestaurant']),
      ...mapActions('map', ['addMarker'])
    },
    computed: {
      ...mapState(['googleApiKey']),
      ...mapState({
        restaurants: (state) => state.restaurantsList.restaurants
      })
    },
    async mounted() {
      console.log('GMapLoader component mounted');

      const loader = new Loader({
        apiKey: this.apiKey,
        libraries: ["places"]
      });

      const api = await loader.load().then(function(){
        return window.google;
      });

      this.google = api;
      this.geocoder = new this.google.maps.Geocoder();
      this.initMap();
      this.setToUserPosition();
      this.places = new this.google.maps.places.PlacesService(this.map);
      console.log('Nearby places call');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map{
    width: 100%;
  }
</style>