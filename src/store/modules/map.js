const map = {
  namespaced: true,
  state: () => ({
      markers: []
  }),
  getters: {
    getMarkerIndexFromId(id) {
      let markerIndex;

      this.state.markers.forEach((marker, index) => {
        if(marker.id == id)
          markerIndex = index;
      });

      return markerIndex;
    }
  },
  mutations: {
    ADD_MARKER(state, marker) {
      state.markers.push(marker);
    },
    REMOVE_MARKER(state, index) {
      state.markers.splice(index, 1);
    }
  },
  actions: {
    addMarker(context, marker) {
      context.commit('ADD_MARKER', marker);
    },
    removeMarker(context, id) {
      let index = this.getters.getMarkerIndexFromId(id);
      context.commit('REMOVE_MARKER', index);
    }
  }
};

export { map };