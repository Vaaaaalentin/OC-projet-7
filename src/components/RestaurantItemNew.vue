<template>
  <div class="new-restaurant">
    <div class="infos">
      <input type="text" name="name" v-model="newRestaurantInfos.name" :class="{ 'error' : nameError }" ref="restaurantName" form="form-new-restaurant" placeholder="Nom du restaurant" />
      <span class="adress">{{ newRestaurantInfos.address }}</span>
    </div>
    <form action="#" id="form-new-restaurant" v-on:submit.prevent>
      <button class="btn-add" v-on:click="addRestaurantClick">+</button>
      <button class="btn-cancel" v-on:click="cancelRestaurantAddingClick">x</button>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    name: 'RestaurantItemNew',
    data() {
      return {
        
      }
    },
    methods: {
      addRestaurantClick() {
        if(this.newRestaurantInfos.name == null)
          return;

        const restaurant = {
          restaurantName: this.newRestaurantInfos.name,
          address: this.newRestaurantInfos.address,
          lat: this.newRestaurantInfos.coords.lat,
          long: this.newRestaurantInfos.coords.long,
          id: this.getNextRestaurantId,
          averageRating: 0,
          ratings: []
        };

        this.addRestaurant(restaurant);

        this.addMarker({
          position: {
            lat: restaurant.lat,
            lng: restaurant.long
          },
          id: restaurant.id, 
          name: restaurant.restaurantName
        });

        this.toggleNewRestaurant(false);
        this.resetNewRestauranInfos();
      },
      cancelRestaurantAddingClick() {
        this.toggleNewRestaurant(false);
        this.resetNewRestauranInfos();
      },
      ...mapActions('restaurantsList', ['addRestaurant', 'toggleNewRestaurant', 'resetNewRestauranInfos']),
      ...mapActions('map', ['addMarker'])
    },
    computed: {
      nameError() {
        if(this.newRestaurantInfos.name == null || this.newRestaurantInfos.name == '')
          return true;

        return false;
      },
      ...mapState({
        newRestaurantInfos: state => state.restaurantsList.newRestaurantInfos
      }),
      ...mapGetters('restaurantsList', ['getNextRestaurantId'])
    },
    mounted() {
      this.$refs.restaurantName.focus();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .new-restaurant{
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
    margin-top: auto;
    border-top: solid 1px #404040;
    background-color: #ffffff;
  }
  .new-restaurant > .infos{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-right: 10px;
  }
  .new-restaurant > .infos > input{
    margin-bottom: 5px;
  }
  .new-restaurant > .infos > input.error:not(:focus){
    border-color: red;
  }
  .new-restaurant .btn-add,
  .new-restaurant .btn-cancel{
    color: #ffffff;
    border: none;
  }
  .new-restaurant .btn-add:active,
  .new-restaurant .btn-cancel:active{
    position: relative;
    top: 1px;
  }

  .new-restaurant .btn-add{
    width: 40px;
    height: 40px;

    background-color: #3498db;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    margin-top: 1px;
    border-bottom: solid 1px #404040;
    border-right: solid 1px #404040;
  }
  .new-restaurant .btn-add:hover{
    background-color: #194868;
  }
  .new-restaurant .btn-add:active{

  }
  .new-restaurant .btn-cancel{
    width: 40px;
    padding-bottom: 5px;

    background-color: #f24437;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    
    border-bottom: solid 1px #404040;
    border-right: solid 1px #404040;
  }
  .new-restaurant .btn-cancel:hover{
    background-color: #b23229;
  }
  .new-restaurant .btn-cancel:active{

  }
</style>