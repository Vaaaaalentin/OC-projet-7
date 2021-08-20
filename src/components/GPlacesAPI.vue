<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'GPlacesAPI',
    props: {
      places: Object,
      map: Object
    },
    methods: {
      addNearbyPlaces() {
        this.places.nearbySearch({
          bounds: this.map.getBounds(),
          types: ['restaurant', 'food', 'establishment', 'point_of_interest']
        }, (results) => {
          let restaurants = this.excludeTypes(results);
          restaurants = this.excludeDuplicates(restaurants);

          restaurants.forEach((place) => {
            let restaurantInfos = this.formateRestaurantInfos(place);

            this.addRestaurant(restaurantInfos);
            this.addMarker({
              id: restaurantInfos.id,
              name: restaurantInfos.name,
              position: {
                lat: restaurantInfos.lat,
                lng: restaurantInfos.long
              }
            });

            this.addPlaceReviews(place.place_id, restaurantInfos.id);
          });
        });
      },
      excludeDuplicates(places) {
        const gplacesRestaurants = this.getGplacesRestaurants;

        return places.filter(place => {
          return !gplacesRestaurants.some(restaurant => restaurant.gplacesId == place.place_id);
        });
      },
      excludeTypes(places) {
        const exclude = ['campground', 'lodging', 'store', 'bakery'];

        const filteredPlaces = places.filter((place) => {
          return !exclude.some((type) => {
            return place.types.includes(type);
          });
        });

        return filteredPlaces;
      },
      formateRestaurantInfos(place) {
        const restaurantInfos = {
          name: place.name,
          address: place.vicinity,
          lat: place.geometry.location.lat(),
          long: place.geometry.location.lng(),
          id: this.getNextRestaurantId,
          from: 'gplaces',
          gplacesId: place.place_id
        };

        return restaurantInfos;
      },
      addPlaceReviews(placeId, restaurantId) {
        this.places.getDetails({
          placeId: placeId
        }, (result, status) => {
          if(status === 'OK')
          {
            const reviews = this.formateReviews(result.reviews);

            this.setReviewsListToRestaurant({
              reviews: reviews,
              id: restaurantId
            });

          }
          else if(status== 'OVER_QUERY_LIMIT')
          {
            setTimeout(() => {
              console.log('retry getting place details');

              this.addPlaceReviews(placeId, restaurantId);
            }, 550);
          }
          else
            console.log(status);
        });
      },
      formateReviews(reviews = []) {
        let formattedReviews = [];

        reviews.forEach((review) => {
          formattedReviews.push({
            comment: review.text,
            stars: review.rating
          });
        });

        return formattedReviews;
      },
      ...mapActions('restaurantsList', ['addRestaurant', 'setReviewsListToRestaurant']),
      ...mapActions('map', ['addMarker'])
    },
    computed: {
      ...mapGetters('restaurantsList', ['getNextRestaurantId', 'getRestaurantFromId', 'getGplacesRestaurants'])
    },
    mounted() {
      console.log('GPlacesAPI component mounted');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>