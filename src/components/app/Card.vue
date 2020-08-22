<template>
  <div class="card-container">
    <slot name="avatar"></slot>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
};
</script>

<style scoped>
.card-container {
  border: solid 1px #e1e1e1;
  background-color: #ffffff;
  padding: 8px;
  display: flex;
  border-radius: 4px;
  align-items: center;
}
</style>
