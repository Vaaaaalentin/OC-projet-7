<template>
  <div id="restaurants-list">
    <div class="ctrls">
      <div class="order">
        <button class="btn" :class="[order == 'asc' ? 'selected' : '']" v-on:click="sortRestaurantsByNote('asc')">
          <BIconSortNumericDown />
        </button>
        <button class="btn" :class="[order == 'desc' ? 'selected' : '']" v-on:click="sortRestaurantsByNote('desc')">
          <BIconSortNumericUpAlt />
        </button>
      </div>
      <div class="sort">
        <span>De</span>
        <select name="min" v-on:change="minSort($event)">
          <option v-for="i in sortRange" :value="i" :key="i" :selected="(i==sortMin) ? true : false">{{ i }}</option>
        </select>
        <span>à</span>
        <select name="max" v-on:change="maxSort($event)">
          <option v-for="i in sortRange" :value="i" :key="i" :selected="(i==sortMax) ? true : false">{{ i }}</option>
        </select>
        <BIconStarFill />
      </div>
    </div>
    <ul class="c-scrollbar">
      <RestaurantItem 
      v-for="restaurant in sortedRestaurants"
      :key="restaurant.id"
      :id="restaurant.id"
      :name="restaurant.restaurantName"
      :address="restaurant.address" 
      :ratings="restaurant.ratings"
      :averageRating="restaurant.averageRating" />

    </ul>
    <div v-if="isLoading" class="loadingIconHolder">
      <span class="loadingIcon">
        <BIconArrowClockwise />
      </span>
    </div>
    <RestaurantItemNew v-if="isAddingNew"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import RestaurantItem from './RestaurantItem.vue'
  import RestaurantItemNew from './RestaurantItemNew.vue'

  export default {
    name: 'RestaurantsList',
    components: {
      RestaurantItem,
      RestaurantItemNew
    },
    data: function(){
      return {
        order: 'desc',
        sortMin: 1,
        sortMax: 5,
        sortRange: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      sortRestaurantsByNote(direction) {
        const restaurants = this.restaurants;
        const dir = (direction == 'asc') ? 1 : -1;

        restaurants.sort((restaurantA, restaurantB) => {
          return (restaurantA.averageRating*dir) - (restaurantB.averageRating*dir);
        });

        this.order = direction;
      },
      minSort(e) {
        this.sortMin = Number(e.target.value);

        if(this.sortMin > this.sortMax)
          this.sortMax = this.sortMin;
      },
      maxSort(e) {
        this.sortMax = Number(e.target.value);

        if(this.sortMax < this.sortMin)
          this.sortMin = this.sortMax;
      }
    },
    computed: {
      sortedRestaurants: function() {
        return this.restaurants.filter(restaurant => (restaurant.averageRating >= this.sortMin && restaurant.averageRating <= this.sortMax || restaurant.ratings.length == 0) && restaurant.isVisible);
      },
      ...mapState({
        restaurants: state => state.restaurantsList.restaurants,
        isAddingNew: state => state.restaurantsList.isAddingNew,
        isLoading: state => state.restaurantsList.isLoading
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #restaurants-list{
    flex: 0 0 350px;
    background-color: #EAEAEA;
    border: solid 1px #CCCCCC;
    box-shadow: 1px 10px 10px #2d2d2d;
    z-index: 2;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #restaurants-list .ctrls{
    border-bottom: solid 1px #404040;
  }
  #restaurants-list .ctrls,
  #restaurants-list .ctrls .order
  #restaurants-list .ctrls .sort{
    display: flex;
  }
  #restaurants-list .ctrls .order,
  #restaurants-list .ctrls .sort{
    width: 50%;
  }
  #restaurants-list .ctrls .order .btn{
    width: 50%;
    height: 100%;
    border-radius: 0;
  }
  #restaurants-list .ctrls .order .btn.selected{
    border: none;
    background-color: #77b55a;
  }
  #restaurants-list .ctrls .order .btn svg{
    width: 1.5em;
    height: 1.5em;
  }

  #restaurants-list .ctrls .sort{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #restaurants-list .ctrls .sort select{
    height: 100%;
    margin: 0 5px;
  }

  #restaurants-list > ul{
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
  }

  .loadingIconHolder{
    text-align: center;
    padding: 10px 0;
  }

  .loadingIcon > svg{
    width: 2em;
    height: 2em;

    -webkit-animation: loadingIcon 1.5s ease-in-out 0s infinite both;
    animation: loadingIcon 1.5s ease-in-out 0s infinite both;
  }

  @-webkit-keyframes loadingIcon {
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes loadingIcon {
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }

</style>