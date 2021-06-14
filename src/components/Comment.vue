<template>
  <li>
    <span class="rating">
      <BIconStarFill v-for="n in rating" :key="n"/>
      <BIconStar v-for="n in oppositeRating" :key="n"/>
    </span> <br/>
    <span class="comment">{{ text }}</span>
  </li>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      text: String,
      rating: Number
    },
    computed: {
      oppositeRating() {
        return 5 - this.rating;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>