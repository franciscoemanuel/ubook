<template>
  <div id="app">
    <contacts-list />

    <snackbar />
  </div>
</template>

<script>
import ContactsList from '@/views/ContactsList.vue';
import Snackbar from '@/components/app/Snackbar.vue';

export default {
  name: 'App',
  components: {
    ContactsList,
    Snackbar
  }
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2a2d3b;
  font-size: 14px;
}
</style>
