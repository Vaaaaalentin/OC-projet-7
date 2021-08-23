import { RESTAURANTS_LIST } from '@/constants/restaurantsList.js'

const restaurantsList = {
  namespaced: true,
  state: () => ({
    restaurants: [],
    isAddingNew: false,
    newRestaurantInfos: {
      name: null,
      address: null,
      coords: null
    }
  }),
  getters: {
    getNextRestaurantId(state) {
      let id = 1;

      state.restaurants.forEach(restaurant => {
        if(restaurant.id >= id)
          id = id+1;
      });

      return id;
    },
    getRestaurantFromId(state) {
      return (id) => {
        return state.restaurants.find(restaurant => restaurant.id == id);
      }
    },
    getGplacesRestaurants(state) {
      return state.restaurants.filter(restaurant => restaurant.gplacesId != false);
    }
  },
  mutations: {
    SET_RESTAURANT_VISIBILITY(state, params) {
      state.restaurants[params.index].isVisible = params.visibility;
    },
    SETUP_RESTAURANTS_LIST(state) {
      state.restaurants = RESTAURANTS_LIST.slice();
    },
    TOGGLE_NEW_RESTAURANT(state, setting) {
      state.isAddingNew = setting;
    },
    SET_POSITION_NEW_RESTAURANT(state, position) {
      state.newRestaurantInfos.address = position.address;
      state.newRestaurantInfos.coords = position.coords;
    },
    RESET_NEW_RESTAURANT_INFOS(state) {
      state.newRestaurantInfos.name = null;
      state.newRestaurantInfos.address = null;
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
    },
    SET_REVIEWS_LIST_TO_RESTAURANT(state, params) {
      const index = state.restaurants.findIndex((restaurant) => {
        return restaurant.id == params.id;
      });

      if(index == -1)
        return;

      state.restaurants[index].ratings = params.reviews;
    }
  },
  actions: {
    setRestaurantVisibility(context, params) {
      const index = this.state.restaurantsList.restaurants.findIndex((restaurant) => {
        return restaurant.id == params.id;
      });

      context.commit('SET_RESTAURANT_VISIBILITY', {index: index, visibility: params.visibility});
    },
    setReviewsListToRestaurant(context, params) {
      context.commit('SET_REVIEWS_LIST_TO_RESTAURANT', params);

      context.dispatch('updateRestaurantAverage', params.id);
    },
    toggleNewRestaurant(context, setting) {
      context.commit('TOGGLE_NEW_RESTAURANT', setting);
    },
    setPositionNewRestaurantInfos(context, address) {
      context.commit('SET_POSITION_NEW_RESTAURANT', address);
    },
    resetNewRestauranInfos(context) {
      context.commit('RESET_NEW_RESTAURANT_INFOS');
    },
    addRestaurant(context, restaurantInfos) {
      const restaurant = {
        id: restaurantInfos.id || context.getters.getNextRestaurantId,
        restaurantName: restaurantInfos.name,
        address: restaurantInfos.address,
        lat: restaurantInfos.lat,
        long: restaurantInfos.long,
        gplacesId: restaurantInfos.gplacesId || false,
        averageRating: 0,
        ratings: [],
        isVisible: true
      };

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

      const average = total/ratings.length || 0;

      const index = this.state.restaurantsList.restaurants.findIndex((restaurant) => {
        return restaurant.id == id;
      });

      context.commit('SET_AVERAGE_RATING_RESTAURANTS', {index: index, rating: average});
    },
    updateAllRestaurantsAverage(context){
      for(let i=0; i<this.state.restaurantsList.restaurants.length; i++)
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
        context.commit('SET_RESTAURANT_VISIBILITY', {index: i, visibility: false});
      }
    }
  }
};

export { restaurantsList };