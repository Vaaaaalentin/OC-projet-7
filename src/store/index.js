import { createStore } from 'vuex'
import { restaurantsList } from './modules/restaurantsList.js'
import { modal } from './modules/modal.js'
import { map } from './modules/map.js'

export default createStore({
  state: {
    
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
    modal,
    map
  }
})