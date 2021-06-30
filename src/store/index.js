import { createStore } from 'vuex'

import { RESTAURANTS_LIST } from '@/constants/restaurantsList.js'

export default createStore({
  state: {
    googleApiKey: 'AIzaSyASVP7Y6sAiVPML4W4v2mAkcSjcQBdHQt0',
    showModal: false,
    restaurantModal: null,
    restaurantsShown: [],
    restaurants: RESTAURANTS_LIST
  },
  getters: {
    nextRestaurantId(state) {
      return state.restaurants[state.restaurants.length-1].id+1;
    },
    getRestaurantFromId(state) {
      return (id) => {
        console.log(id);
        return state.restaurants.find(restaurant => restaurant.id == id);
      }
    },
    getRestaurantIndexFromId(state, id) {
      const restaurants = state.restaurants;

      for(let i=0; i<restaurants.length; i++)
        if(restaurants[i].id == id)
          return i;
    }
  },
  mutations: {
    ADD_RESTAURANT(state, restaurant) {
      state.restaurants.push(restaurant);
    },
    REPLACE_RESTAURANT_LIST(state, restaurants) {
      state.restaurants = restaurants;
    },
    SET_ID_TO_RESTAURANTS(state, params) {
      state.restaurants[params.index].id = params.id;
    },
    SET_AVERAGE_RATING_RESTAURANTS(state, params) {
      state.restaurants[params.index].averageRating = params.rating;
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
    updateRestaurantAverage(context, id){
      const ratings = this.getters.getRestaurantFromId(id).ratings;
      let total = 0;
      ratings.forEach(element => {
        total += element.stars
      });

      const average = total/ratings.length;

      context.commit('SET_AVERAGE_RATING_RESTAURANTS', id, average);
    },
    updateAllRestaurantsAverage(context){
      for(let i=0; i<this.state.restaurants.length; i++)
      {
        context.dispatch('updateRestaurantAverage', this.state.restaurants[i].id);
      }
    },
    toggleModal(context, showState) {
      if(showState)
        context.commit('SHOW_MODAL');
      else
        context.commit('HIDE_MODAL');
    },
    setInfosModal(context, restaurantId) {
      const restaurant = this.getters.getRestaurantFromId(restaurantId);

      context.commit('SET_INFOS_MODAL', restaurant);
    },
    initRestaurantsList(context) {
      for(let i=0; i<this.state.restaurants.length; i++)
      {
        context.commit('SET_ID_TO_RESTAURANTS', {index: i, id: i});

        const ratings = this.state.restaurants[i].ratings;
        let total = 0;
        ratings.forEach(element => {
          total += element.stars
        });
        const average = total/ratings.length;

        console.log(average);

        context.commit('SET_AVERAGE_RATING_RESTAURANTS', {index: i, rating: average});
      }
    }
  },
  modules: {
  }
})
