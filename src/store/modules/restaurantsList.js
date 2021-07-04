import { RESTAURANTS_LIST } from '@/constants/restaurantsList.js'

const restaurantsList = {
  namespaced: true,
  state: () => ({
    restaurants: []
  }),
  getters: {
    
  },
  mutations: {
    SETUP_RESTAURANTS_LIST(state) {
      state.restaurants = RESTAURANTS_LIST.slice();
    },
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
    initRestaurantsList(context) {
      context.commit('SETUP_RESTAURANTS_LIST');

      for(let i=0; i<this.state.restaurantsList.restaurants.length; i++)
      {
        context.commit('SET_ID_TO_RESTAURANTS', {index: i, id: i});

        const ratings = this.state.restaurantsList.restaurants[i].ratings;
        let total = 0;
        ratings.forEach(element => {
          total += element.stars
        });
        const average = total/ratings.length;

        context.commit('SET_AVERAGE_RATING_RESTAURANTS', {index: i, rating: average});
      }
    }
  }
};

export { restaurantsList };