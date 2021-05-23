<template>
  <div id="restaurants-list">
    <ul></ul>
  </div>
</template>

<script>
  export default {
    name: 'RestaurantsList'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #restaurants-list{
    width: 400px;
    background-color: #EAEAEA;
    box-shadow: 1px 10px 10px #2d2d2d;
    z-index: 1;
  }

  #restaurants-list > ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #restaurants-list > ul li{
    padding: 10px 15px;
    border-bottom: solid 1px #404040;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  #restaurants-list > ul li .ratings{
    display: flex;
  }
</style>