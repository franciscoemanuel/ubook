<template>
  <div class="base-layout">
    <navbar>
      <template slot="navbarActions">
        <slot name="navbarActions"></slot>
      </template>
    </navbar>
    <div class="content-container">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue';

export default {
  name: 'BaseLayout',
  components: { Navbar }
};
</script>
<style>
.content-container {
  height: 100%;
}

.base-layout {
  margin: 16px;
}

body {
  margin: 0;
  background-color: #f8f9fd;
}
</style>
