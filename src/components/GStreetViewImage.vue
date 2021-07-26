<template>
  <img :src="imageURL" />
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'GStreetViewImage',
    props: {
      address: String
    },
    methods: {

    },
    mounted() {
      console.log(this.imageURL);
    },
    computed: {
      ...mapState(['googleApiKey']),
      imageURL() {
        return 'https://maps.googleapis.com/maps/api/streetview?location='+this.parsedAddress+'&size=300x200&key='+this.googleApiKey;
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