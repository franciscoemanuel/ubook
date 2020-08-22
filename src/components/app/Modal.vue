<template>
  <div class="modal" v-show="value">
    <div class="modal-dialog">
      <div>
        <slot name="header"></slot>
      </div>
      <div class="content">
        <slot name="default"></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-dialog {
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: max-content;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  animation-name: scaley;
  animation-duration: 0.4s;
}

.close {
  color: #aaa;
  float: right;
  font-size: 22px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@keyframes scaley {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
</style>
