<template>
  <li :class="{ selected: isSelected }" v-on:click="showDetails">
    <span class="name">{{ name }}</span>
    <span class="address">{{ address }}</span>
    <div class="rating">
      <div class="rating-average">
        <BIconStarFill v-for="n in Math.floor(ratingAverage)" :key="n"/>
        <BIconStarHalf v-if="ratingHasDecimal" />
        <BIconStar v-for="n in Math.floor(oppositeRatingAverage)" :key="n"/>
        <span class="nb-ratings"> ({{ ratings.length }})</span>
      </div>
    </div>
  </li>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'RestaurantItem',
    props: {
      id: Number,
      name: String,
      address: String,
      ratings: Array
    },
    data() {
      return {

      }
    },
    methods: {
      showDetails: function() {
        this.setInfosModal(this.id);
        this.toggleModal(true);

        this.isSelected = true;
      },
      ...mapActions('modal', ['toggleModal', 'setInfosModal'])
    },
    computed: {
      ratingAverage: function() {
        let total = 0;

        for(let i=0; i<this.ratings.length; i++)
          total += this.ratings[i].stars;

        return (total/this.ratings.length);
      },
      oppositeRatingAverage() {
        return 5 - this.ratingAverage;
      },
      ratingHasDecimal() {
        return (this.ratingAverage.toString().indexOf('.') != -1) ? true : false;
      },
      isSelected() {
        if(this.restaurantModal !== null && this.id === this.restaurantModal.id)
          return true;

        return false;
      },
      ...mapState({
        restaurantModal: (state) => state.modal.restaurantModal
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    padding: 10px 15px;
    border-bottom: solid 1px #404040;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  li .ratings{
    display: flex;
  }
  li.selected{
    background-color: #77b55a;
    color: #fff;
    text-shadow: 1px 1px #404040;
  }
</style>