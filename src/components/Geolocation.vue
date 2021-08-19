<template>
  <div v-if="state == 'off'" id="geolocation-disclaimer">
    <span class="message"><BIconExclamationCircle /> Oups ! Il semblerait que vous ayez refusé l'utilisation de. Activer la localisation puis rechargez la page.</span>
  </div>
</template>

<script>
  export default {
    name: 'Geolocation',
    data: function() {
      return {
        state: 'on'
      }
    },
    methods: {
      getUserPosition(callback) {
        navigator.geolocation.getCurrentPosition(callback, () => {
          this.state = 'off';
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #geolocation-disclaimer{
    width: 100%;
    background-color: #fff;
    position: absolute;
    z-index: 2;
    padding: 7px 0px;
    border-bottom: solid 1px #CCC;
  }

  .message{
    margin-left: 10px;
  }
</style>