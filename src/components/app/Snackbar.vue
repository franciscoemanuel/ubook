<template>
  <div class="snackbar" v-show="snackbar.show">
    <div class="snackbar-wrapper">
      <div class="snackbar-content">
        <i class="material-icons" v-show="snackbar.icon"> {{ snackbar.icon }}</i>
        <span class="snackbar-text">{{ snackbar.message }}</span>
        <btn flat textColor="white" v-show="snackbar.closable" @click="closeSnackbar()">Fechar</btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Btn from '@/components/app/Btn.vue';

export default {
  name: 'Snackbar',
  components: {
    Btn
  },
  methods: {
    ...mapActions('app', ['closeSnackbar']),
    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      this.activeTimeout = setTimeout(() => {
        this.closeSnackbar();
      }, this.snackbar.timeout);
    }
  },
  computed: {
    ...mapGetters('app', ['snackbar'])
  },
  data() {
    return {
      activeTimeout: {}
    };
  },
  watch: {
    snackbar: {
      deep: true,
      handler({ show }) {
        if (show) {
          this.setTimeout();
        }
      }
    }
  }
};
</script>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
}

.snackbar-wrapper {
  border-radius: 4px;
  max-height: 50px;
  align-items: center;
  border-color: currentColor !important;
  display: flex;
  margin: 8px;
  max-width: 672px;
  min-height: 48px;
  width: max-content;
  padding: 0;
  pointer-events: auto;
  position: relative;
  animation-name: slidey;
  animation-duration: 0.2s;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  background-color: #4caf50 !important;
  border-color: #4caf50 !important;
  color: #ffffff;
  padding: 0 10px;
}

@keyframes slidey {
  0% {
    transform: scale(0.8);
    bottom: -20px;
  }
  100% {
    transform: scale(1);
    bottom: 0px;
  }
}

.snackbar-text {
  font-weight: 500;
}

.snackbar-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 0 12px;
}
</style>
