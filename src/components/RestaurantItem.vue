<template>
  <li v-on:click="showDetails">
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
  import { mapActions } from 'vuex'

  export default {
    name: 'RestaurantItem',
    props: {
      name: String,
      address: String,
      ratings: Array
    },
    methods: {
      showDetails: function() {
        this.setInfosModal({
          name: this.name,
          address: this.address,
          ratings: this.ratings
        });
        this.toggleModal(true);
      },
      ...mapActions(['toggleModal', 'setInfosModal'])
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>