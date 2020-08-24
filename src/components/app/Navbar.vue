<template>
  <div class="navbar-grid">
    <img alt="Vue logo" src="@/assets/images/ic-logo.svg" />
    <div class="navbar-actions-container">
      <slot name="navbarActions"></slot>
    </div>
    <text-input
      placeholder="Buscar..."
      append-icon="search"
      background-color="#e4e7f4"
      :outlined="false"
      v-model="search"
      class="search-input"
    ></text-input>
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
  grid-gap: 10px;
  justify-items: center;
}

.search-input {
  width: 100%;
}

@media (min-width: 900px) {
  .navbar-grid {
    grid-template-columns: 208px 168px calc(100% - (208px + 168px + 21px));
    justify-items: flex-start;
  }
}
</style>
