<template>
  <div class="base-layout">
    <navbar />
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
/* .base-layout  */

.content-container {
  height: 100%;
}

body {
  margin: 1em;
  background-color: #f8f9fd;
}
</style>
