<template>
  <li v-on:click="showDetails">
    <span class="name">{{ name }}</span>
    <span class="address">{{ address }}</span>
    <div class="rating">
      <div class="rating-average">
        <span class="fas fa-star"></span>
        <span class="fas fa-star"></span>
        <span class="fas fa-star"></span>
        <span class="fas fa-star-half-alt"></span>
        <span class="far fa-star"></span>
      </div>
      <span class="nb-ratings">{{ ratingAverage }} ({{ ratings.length }})</span>
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
        console.log('coucou');
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>