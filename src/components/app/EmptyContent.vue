<template>
  <div class="empty-content-container">
    <slot name="image"></slot>
    <span class="empty-contacts-text">
      <slot name="default"></slot>
    </span>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'EmptyContent'
};
</script>

<style>
.empty-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.empty-contacts-text {
  margin: 1.5em;
  font-size: 16px;
}
</style>
