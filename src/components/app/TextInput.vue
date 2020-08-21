<template>
  <div :class="{ error: errorMessage }">
    <div class="label-slot" v-show="label">
      <span class="label-text">{{ label }}</span>
    </div>
    <div class="input-container" :style="{ 'background-color': backgroundColor }" :class="{ border: outlined }">
      <div class="input-slot">
        <input type="text" class="text-input" :placeholder="placeholder" v-model="internalValue" @blur="validations && validations.$touch()" />
        <i class="material-icons append-icon" v-show="appendIcon">{{ appendIcon }}</i>
      </div>
    </div>
    <div class="error-slot" v-show="errorMessage">
      <span class="error-message">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import { messages } from '@/validation';

export default {
  name: 'TextInput',
  props: {
    backgroundColor: {
      type: String
    },
    appendIcon: {
      type: String
    },
    placeholder: {
      type: String
    },
    outlined: {
      type: Boolean,
      default: true
    },
    label: {
      type: String
    },
    value: {
      type: String
    },
    validations: {
      type: Object
    }
  },
  data() {
    return {
      lazyValue: this.value
    };
  },
  computed: {
    internalValue: {
      get() {
        return this.lazyValue;
      },
      set(val) {
        this.lazyValue = val;
        this.$emit('input', val);
      }
    },
    errorMessage() {
      const error = '';
      if (!this.validations || !Object.keys(this.validations).length) return error;
      const validations = Object.keys(this.validations).filter(key => Object.keys(messages).includes(key));
      if (!this.validations.$dirty) return error;
      const validation = validations.find(val => !this.validations[val]);
      const errorMessage = messages[validation];
      return errorMessage;
    }
  }
};
</script>

<style scoped>
.input-container {
  border-radius: 4px;
}

.border {
  border: solid 1px #c0c3d2;
}

.error .border {
  border: solid 1px red;
}

.text-input {
  width: 100%;
  height: 100%;
  height: 32px;
}

.input-slot {
  margin: 0 8px;
  height: 100%;
  display: flex;
  align-items: center;
}

.append-icon {
  color: #9198af;
}

input {
  background-color: transparent;
  border-style: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #2a2d3b;
}

input::placeholder {
  color: #9198af;
  font-weight: 500;
}

.label-slot {
  margin-bottom: 4px;
}

.label-text {
  font-weight: 500;
  font-size: 14px;
}

.error-message {
  font-size: 14px;
}

.error-slot {
  animation-name: scalex;
  animation-duration: 0.4s;
  transform-origin: left center;
}

.error {
  color: red;
}

@keyframes scalex {
  0% {
    transform: scaleX(0.2);
  }
  50% {
    transform: scaleX(1.03);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
