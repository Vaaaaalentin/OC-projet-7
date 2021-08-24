<template>
  <li :class="{ selected: isSelected }" v-on:click="showDetails">
    <span class="name">{{ name }}</span>
    <span class="address">{{ address }}</span>
    <div class="ratings">
      <div class="rating-average">
        <i v-if="ratings.length==0">Aucun avis</i>
        <div v-if="ratings.length>0">
          <BIconStarFill v-for="n in Math.floor(averageRating)" :key="n"/>
          <BIconStarHalf v-if="ratingHasDecimal" />
          <BIconStar v-for="n in Math.floor(oppositeRatingAverage)" :key="n"/>
          <span class="nb-ratings"> ({{ ratings.length }})</span>
        </div>
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
      ratings: Array,
      averageRating: Number
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
      oppositeRatingAverage() {
        return 5 - this.averageRating;
      },
      ratingHasDecimal() {
        return (this.averageRating.toString().indexOf('.') != -1) ? true : false;
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

  li>span{
    margin-bottom: 3px;
  }

  li .name{
    font-weight: bold;
  }

  li .address{
    font-style: italic;
  }

  li.selected{
    background-color: #77b55a;
    color: #fff;
    text-shadow: 1px 1px #404040;
  }
</style>