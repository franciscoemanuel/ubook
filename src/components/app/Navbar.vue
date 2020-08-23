<template>
  <div class="navbar-grid">
    <img alt="Vue logo" src="@/assets/images/ic-logo.svg" />
    <div>
      <slot name="navbarActions"></slot>
    </div>
    <text-input placeholder="Buscar..." append-icon="search" background-color="#e4e7f4" :outlined="false" v-model="search"></text-input>
  </div>
</template>

<script>
import TextInput from '@/components/app/TextInput.vue';

export default {
  name: 'Navbar',
  props: {
    hideActions: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TextInput
  },
  computed: {
    search: {
      get() {
        return this.$store.getters['contacts/search'];
      },
      set(value) {
        this.$store.dispatch('contacts/setSearch', value.trim());
      }
    }
  }
};
</script>

<style>
.navbar-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 7fr;
}
</style>
