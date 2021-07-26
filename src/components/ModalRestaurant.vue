<template>
  <div class="modal-holder" ref="holder" v-on:click="closeModalFromBackground">
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close" v-on:click="closeModal">X</span>
        </div>
        <div class="modal-body">
          <div class="infos">
            <p class="name">{{ restaurantModal.restaurantName }}</p>
            <p class="address">{{ restaurantModal.address }}</p>
            <GStreetViewImage
            :address="restaurantModal.address"/>
          </div>
          <div class="comments">
            <ul class="c-scrollbar">
              <Comment 
              v-for="comment in restaurantModal.ratings"
              :key="comment.id"
              :text="comment.comment" 
              :rating="comment.stars"/>
              <li class="no-comment" v-if="restaurantModal.ratings.length==0">Aucun commentaire posté</li>
            </ul>
            <div class="new-comment">
              <textarea v-model="commentText" placeholder="Votre commentaire..."></textarea>
              <select v-model="commentRating">
                <option disabled value="">Note</option>
                <option v-for="n in 6" :key="n-1" :value="n-1">{{ n-1 }}</option>
              </select>
              <button class="btn" v-on:click="addNewComment">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Comment from './Comment.vue'
  import GStreetViewImage from './GStreetViewImage.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'ModalRestaurant',
    components: {
      Comment,
      GStreetViewImage
    },
    data: function() {
      return {
        commentRating: '',
        commentText: undefined
      };
    },
    methods: {
      closeModalFromBackground(e) {
        if(e.target == this.$refs.holder)
          this.closeModal();
      },
      closeModal() {
        this.toggleModal(false);
      },
      addNewComment() {
        if(this.commentRating == '' || this.commentText == undefined)
          return;

        this.restaurantModal.ratings.push({
          stars: this.commentRating,
          comment: this.commentText
        });

        this.resetInputs();
      },
      resetInputs() {
        this.commentRating = '';
        this.commentText = undefined;
      },
      ...mapActions('modal', ['toggleModal'])
    },
    computed: {
      ...mapState({
        restaurantModal: state => state.modal.restaurantModal
      })
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
    height: 400px;
    background-color: #FAFAFA;
    padding: 15px 25px;
  }

  .modal-header{
    overflow: hidden;
  }

  .modal-header .close{
    cursor: pointer;
    float: right;
  }

  .modal-body {
    display: flex;
  }

  .modal-body .comments{
    width: 435px;
  }

  .modal-body .comments > ul{
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    height: 297px;
  }

  .modal-body .comments > ul li.no-comment{
    font-style: italic;
  }

  .modal-body .comments > ul li{
    border-bottom: solid 1px #404040;
    padding: 10px;
  }
  .modal-body .comments > ul li:last-child{
    /*border-bottom: none;*/
  }

  .modal-body .new-comment{
    display: flex;
    padding: 15px;
  }

  .modal-body .new-comment > textarea,
  .modal-body .new-comment > select,
  .modal-body .new-comment > .btn{
    /*border: solid 1px #909090;*/
  }

  .modal-body .new-comment > textarea{
    resize: none;
    width: 100%;
    margin: 0;
  }
  .modal-body .new-comment > select{

  }
  .modal-body .new-comment > .btn{
    width: 75px;
  }

  .modal-body .infos{
    padding-right: 15px;
    width: 315px;
  }
  .modal-body .infos > .name{
    margin-top: 0;
  }
</style>