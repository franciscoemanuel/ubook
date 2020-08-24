<template>
  <div class="avatar-container" :style="{ 'background-color': color }">
    <span class="char-text">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContactAvatar',
  props: {
    char: {
      type: String
    },
    color: {
      type: String
    }
  }
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: inline-block;
}

.char-text {
  display: flex;
  justify-content: center;
  flex: 1;
  height: 100%;
  align-items: center;
  color: #ffffff;
}
</style>
