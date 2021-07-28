<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'MapMarker',
    props: {
      google: Object,
      map: Object,
      position: Object,
      key: String,
      id: String,
      name: String
    },
    data: function() {
      return {
        marker: null
      }
    },
    methods: {
      ...mapActions('modal', ['toggleModal', 'setInfosModal'])
    },
    mounted: function() {
      this.marker = new this.google.maps.Marker({
        map: this.map,
        position: this.position,
        title: this.name,
        label: this.name,
      });

      if(this.id != 'user')
      {
        this.marker.addListener('click', () => {
          this.setInfosModal(this.id);
          this.toggleModal(true);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>