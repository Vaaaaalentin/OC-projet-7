import { createStore } from 'vuex'
import { restaurantsList } from './modules/restaurantsList.js'
import { modal } from './modules/modal.js'

export default createStore({
  state: {
    googleApiKey: 'AIzaSyASVP7Y6sAiVPML4W4v2mAkcSjcQBdHQt0'
  },
  getters: {
    getRestaurantFromId(state) {
      return (id) => {
        return state.restaurantsList.restaurants.find(restaurant => restaurant.id == id);
      }
    }
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    restaurantsList,
    modal
  }
})