<template>
  <div id="app">
    <contacts-list />
  </div>
</template>

<script>
import ContactsList from '@/views/ContactsList.vue';

export default {
  name: 'App',
  components: {
    ContactsList
  }
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2a2d3b;
  font-size: 16px;
}
</style>
