<script>
  export default {
    name: 'MapMarker',
    props: {
      google: Object,
      map: Object,
      position: Object,
      key: String,
      name: String
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
        title: this.name,
        label: this.name
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>