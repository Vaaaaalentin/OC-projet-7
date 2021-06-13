<template>
  <li>
    <span>{{ text }}</span>
    <span>{{ ratings }}</span>
  </li>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      text: String,
      rating: Number
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>