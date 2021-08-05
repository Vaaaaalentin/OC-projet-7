<template>
  <img :src="imageURL" />
</template>

<script>
  export default {
    name: 'GStreetViewImage',
    props: {
      address: String
    },
    data: function() {
      return {
        apiKey: process.env.VUE_APP_GOOGLE_API_KEY
      }
    },
    computed: {
      imageURL() {
        return 'https://maps.googleapis.com/maps/api/streetview?location='+this.parsedAddress+'&size=300x200&key='+this.apiKey;
      },
      parsedAddress() {
        return this.address.split(' ').join('+');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>