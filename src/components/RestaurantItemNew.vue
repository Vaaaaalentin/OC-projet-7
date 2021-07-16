<template>
  <div class="new-restaurant">
    <div class="infos">
      <input type="text" name="name" v-model="restaurantName" :class="{ 'error' : nameError }" ref="restaurantName" placeholder="Nom du restaurant" />
      <span class="adress">Addresse</span>
    </div>
    <button class="btn-add" v-on:click="addRestaurantClick">+</button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'RestaurantItemNew',
    data() {
      return {
        restaurantName: ''
      }
    },
    methods: {
      addRestaurantClick() {
        if(this.restaurantName == '')
          return;

        this.addRestaurant({
          "restaurantName":this.name,
          "address":"rue test",
          "lat":48.8737614,
          "long":2.3501699,
          "id": this.getNextRestaurantId,
          "averageRating": 0,
          "ratings":[]
        });
      },
      ...mapActions('restaurantsList', ['addRestaurant'])
    },
    computed: {
      nameError() {
        if(this.restaurantName == '')
          return true;

        return false;
      },
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
  .new-restaurant > .infos > input:not(:focus){
    border-color: red;
  }
  .new-restaurant > .btn-add{
    width: 40px;
    height: 40px;
  }
</style>