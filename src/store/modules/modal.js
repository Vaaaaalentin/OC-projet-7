const modal = {
  namespaced: true,
  state: () => ({
    showModal: false,
    restaurantModal: null
  }),
  getters: {},
  mutations: {
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
    toggleModal(context, showState) {
      if(showState)
        context.commit('SHOW_MODAL');
      else
        context.commit('HIDE_MODAL');
    },
    setInfosModal(context, restaurantId) {
      const restaurant = this.getters.getRestaurantFromId(restaurantId);
      context.commit('SET_INFOS_MODAL', restaurant);
    }
  }
};

export { modal };