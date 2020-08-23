import { clone } from '@/utils';

const SNACKBAR_BASE_STATE = {
  show: false,
  icon: '',
  message: '',
  color: '',
  closable: false,
  timeout: 2000 // ms
};

const app = {
  state: {
    snackbar: clone(SNACKBAR_BASE_STATE)
  },

  mutations: {
    SHOW_SNACKBAR: (state, payload) => {
      Object.assign(state, { snackbar: payload });
    },
    CLOSE_SNACKBAR: state => {
      Object.assign(state, { snackbar: clone(SNACKBAR_BASE_STATE) });
    }
  },

  actions: {
    showSnackbar({ commit, state }, { message, color, closable, icon, timeout }) {
      commit('SHOW_SNACKBAR', Object.assign(state.snackbar, clone({ show: true, message, color, closable, icon, timeout })));
    },
    closeSnackbar({ commit }) {
      commit('CLOSE_SNACKBAR');
    }
  },

  getters: {
    snackbar: state => state.snackbar
  },

  namespaced: true
};

export default app;
