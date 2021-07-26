import { createStore } from 'vuex'
import { restaurantsList } from './modules/restaurantsList.js'
import { modal } from './modules/modal.js'
import { map } from './modules/map.js'

export default createStore({
  state: {
    googleApiKey: 'AIzaSyB60Ffk7jJMPVEeAwu70s__cHmB5Dxr6C8',
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