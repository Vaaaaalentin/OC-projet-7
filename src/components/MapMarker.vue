<script>
  export default {
    name: 'MapMarker',
    props: {
      google: Object,
      map: Object,
      position: Object,
      id: String
    },
    data: function() {
      return {
        marker: null
      }
    },
    methods: {
    },
    mounted: function() {
      this.marker = new this.google.maps.Marker({
        map: this.map,
        position: this.position,
        title: this.id
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>