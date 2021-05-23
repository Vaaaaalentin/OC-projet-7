<template>
  <div id="custom-map">
    
  </div>
</template>

<script>
  

  export default {
    name: 'CustomMap',
    data: function() {
      return {
        apiKey: '',
        config: {},
        googlemap: null,
        map: null
      };
    },
    methods: {
      initMap() {

      }
    },
    async mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #custom-map{
    width: 100%;
  }
</style>