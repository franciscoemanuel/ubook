import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import contacts from './modules/contacts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    contacts
  }
});
