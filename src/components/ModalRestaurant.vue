<template>
  <div class="modal-holder">
    <div class="modal">
      <div class="modal-content">
        <div class="ctrls">
          <span class="close" v-on:click="closeModal">X</span>
        </div>
        <div class="infos">
          <span class="name">{{ restaurantModal.name }}</span> <br/>
          <span class="address">{{ restaurantModal.address }}</span>
        </div>
        <div class="comments">
          <ul>
            <Comment 
            v-for="comment in restaurantModal.ratings"
            :key="comment.id"
            :text="comment.comment" 
            :rating="comment.rating"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Comment from './Comment.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'ModalRestaurant',
    components: {
      Comment
    },
    data: function(){
      return {
        
      }
    },
    methods: {
      closeModal() {
        this.toggleModal(false);
      },
      ...mapActions(['toggleModal'])
    },
    computed: {
      ...mapState(['restaurantModal'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal-holder{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(220, 220, 220, 0.4);
  }

  .modal{
    position: relative;
    padding-left: 350px;
  }

  .modal-content{
    position: relative;
    box-shadow: 1px 5px 5px rgba(50, 50, 50, 0.4);
    margin: 200px auto;
    width: 750px;
    min-height: 400px;
    background-color: #EAEAEA;
    padding: 15px 25px;
  }

  .ctrls .close{
    cursor: pointer;
    float: right;
  }
</style>