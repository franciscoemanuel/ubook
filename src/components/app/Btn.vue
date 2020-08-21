<template>
  <div class="button-container" :class="{ rounded, flat }" :style="{ 'background-color': color, color: textColor }" @click="$emit('click')">
    <div class="button-slot">
      <i class="material-icons prepend-icon" v-show="prependIcon">{{ prependIcon }}</i>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    color: {
      type: String,
      default: '#dbff90'
    },
    prependIcon: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: true
    },
    flat: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: '#fa7268'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.button-container {
  padding: 0.3em;
  font-weight: 500;
  width: max-content;
  font-size: 14px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(255, 255, 255, 0.16);
  cursor: pointer;
}

.button-slot {
  display: flex;
  align-items: center;
  margin: 0 1.2em;
}

.prepend-icon {
  margin-right: 5px;
}

.rounded {
  border-radius: 15px;
}

.flat {
  background-color: transparent !important;
  box-shadow: none;
  border: none;
  width: min-content;
}

.flat .button-slot {
  margin: 0;
  width: min-content;
}
</style>
