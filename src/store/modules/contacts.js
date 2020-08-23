const app = {
  state: {
    search: ''
  },

  mutations: {
    SET_SEARCH: (state, payload) => {
      Object.assign(state, { search: payload });
    },
    RESET_SEARCH: state => {
      Object.assign(state, { search: '' });
    }
  },

  actions: {
    setSearch({ commit }, search) {
      commit('SET_SEARCH', search);
    },
    resetSearch({ commit }) {
      commit('RESET_SEARCH');
    }
  },

  getters: {
    search: state => state.search
  },

  namespaced: true
};

export default app;
