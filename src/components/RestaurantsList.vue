<template>
  <div id="restaurants-list">
    <div class="ctrls">
      <button class="btn" v-on:click="sortRestaurantsByNote('asc')">Asc</button>
      <button class="btn" v-on:click="sortRestaurantsByNote('desc')">Desc</button>
    </div>
    <ul>
      <RestaurantItem 
      v-for="restaurant in restaurants" 
      :key="restaurant.restaurantName"
      :name="restaurant.restaurantName"
      :address="restaurant.address" 
      :ratings="restaurant.ratings" />
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import RestaurantItem from './RestaurantItem.vue'

  export default {
    name: 'RestaurantsList',
    components: {
      RestaurantItem
    },
    data: function(){
      return {
        order: 'asc'
      }
    },
    methods: {
      restaurantRatingsAverage(restaurant) {
        let total = 0;
        const ratings = restaurant.ratings;

        ratings.forEach(function(item){
          total += item.stars
        });

        return total/ratings.length;
      },
      sortRestaurantsByNote(direction) {
        const restaurants = this.$store.state.restaurants;
        const dir = (direction == 'asc') ? 1 : -1;

        const _this = this;

        restaurants.sort(function(context){
            return function(restaurantA, restaurantB) {
              return (context.restaurantRatingsAverage(restaurantA)*dir) - (context.restaurantRatingsAverage(restaurantB)*dir);
            }
        }(_this));

        this.replaceRestaurantsList(restaurants);
      },
      ...mapActions(['replaceRestaurantsList'])
    },
    computed: {
      ...mapState(['restaurants'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #restaurants-list{
    flex: 0 0 350px;
    background-color: #EAEAEA;
    box-shadow: 1px 10px 10px #2d2d2d;
    z-index: 2;
  }

  #restaurants-list .ctrls{
    display: flex;
  }
  #restaurants-list .ctrls .btn{
    width: 50%;
    border-radius: 0;
  }

  #restaurants-list > ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #restaurants-list > ul li{
    padding: 10px 15px;
    border-bottom: solid 1px #404040;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  #restaurants-list > ul li .ratings{
    display: flex;
  }
</style>