import { createStore } from 'vuex'

export default createStore({
  state: {
    showModal: false,
    restaurantModal: null,
    restaurants: [
      {
        "restaurantName":"Bronco",
        "address":"39 Rue des Petites Écuries, 75010 Paris",
        "lat":43.218141,
        "long":5.7332463,
        "ratings":[
           {
              "stars":4,
              "comment":"Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande."
           },
           {
              "stars":5,
              "comment":"Tout simplement mon restaurant préféré !"
           }
        ]
     },
     {
        "restaurantName":"Babalou",
        "address":"4 Rue Lamarck, 75018 Paris",
        "lat":43.2073059,
        "long":5.7343181,
        "ratings":[
           {
              "stars":5,
              "comment":"Une minuscule pizzeria délicieuse cachée juste à côté du Sacré choeur !"
           },
           {
              "stars":3,
              "comment":"J'ai trouvé ça correct, sans plus"
           }
        ]
     }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_RESTAURANT(state, restaurant) {
      state.restaurants.push(restaurant);
    },
    REPLACE_RESTAURANT_LIST(state, restaurants) {
      state.restaurants = restaurants;
    },
    SHOW_MODAL(state) {
      state.showModal = true;
    },
    HIDE_MODAL(state) {
      state.showModal = false;
    },
    SET_INFOS_MODAL(state, restaurant) {
      state.restaurantModal = restaurant;
    }
  },
  actions: {
    addRestaurant(context, restaurant) {
      context.commit('ADD_RESTAURANT', restaurant);
    },
    replaceRestaurantsList(context, restaurants) {
      context.commit('REPLACE_RESTAURANT_LIST', restaurants);
    },
    toggleModal(context, showState) {
      if(showState)
        context.commit('SHOW_MODAL');
      else
        context.commit('HIDE_MODAL');
    },
    setInfosModal(context, restaurant) {
      context.commit('SET_INFOS_MODAL', restaurant);
    }
  },
  modules: {
    
  }
})
