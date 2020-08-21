<template>
  <modal v-model="value" class="new-contact-modal">
    <template slot="header">
      <div class="form-header">
        <span>Criar novo contato</span>
      </div>
      <hr class="divider" />
    </template>
    <div class="form-content">
      <contact-form v-bind.sync="newContact" :validations="$v.newContact"></contact-form>
    </div>
    <template slot="footer">
      <hr class="divider" />
      <div class="actions-container">
        <btn flat @click="$emit('input', false)">Cancelar</btn>
        <btn color="#fa7268" textColor="white" class="save-btn" @click="save" :disabled="$v.$invalid">Salvar</btn>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/app/Modal.vue';
import Btn from '@/components/app/Btn.vue';
import ContactForm from '@/components/contacts/ContactForm.vue';
import { required, email } from 'vuelidate/lib/validators';
import { phone } from '@/validation/validators';

export default {
  name: 'NewContactDialog',
  components: {
    Modal,
    Btn,
    ContactForm
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newContact: {
        name: '',
        phone: '',
        email: ''
      }
    };
  },
  methods: {
    save() {
      console.log(this.newContact);
    }
  },
  validations: {
    newContact: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        phone
      }
    }
  }
};
</script>

<style>
.form-header {
  margin: 16px;
  font-size: 16px;
  font-weight: 500;
}

.form-content {
  margin: 16px 24px;
}

.new-contact-modal .modal-dialog {
  width: 432px;
}

.divider {
  border: solid 1px #c0c3d2;
}

.actions-container {
  display: flex;
  justify-content: flex-end;
  margin: 24px 16px;
}

.save-btn {
  margin-left: 16px;
}
</style>
