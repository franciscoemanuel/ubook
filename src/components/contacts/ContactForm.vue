<template>
  <div>
    <text-input label="Nome" class="contact-input" :value="name" @input="$emit('update:name', $event)" :validations="validations.name"></text-input>
    <text-input
      label="E-mail"
      class="contact-input"
      :value="email"
      @input="$emit('update:email', $event)"
      :validations="validations.email"
    ></text-input>
    <text-input
      label="Telefone"
      class="contact-input phone-input"
      v-mask="['(##) ####-####', '(##) #####-####']"
      :value="phone"
      @input="$emit('update:phone', $event)"
      :validations="validations.phone"
    ></text-input>
  </div>
</template>

<script>
import TextInput from '@/components/app/TextInput.vue';

export default {
  name: 'ContactForm',
  components: {
    TextInput
  },
  props: {
    phone: {
      type: String
    },
    name: {
      type: String
    },
    email: {
      type: String
    },
    validations: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.contact-input {
  margin-bottom: 16px;
}

.phone-input {
  width: 40%;
}
</style>
