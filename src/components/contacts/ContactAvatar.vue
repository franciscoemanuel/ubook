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
    }
  },
  computed: {
    color() {
      const colors = ['#fa8d68', '#90d26c', '#68a0fa', '#fab668', '#8368fa', '#fa68b5', '#5fe2c4', '#f55a5a'];
      const colorRandomIndex = colors[Math.floor(Math.random() * colors.length)];
      return colorRandomIndex;
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
  margin-right: 16px;
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
