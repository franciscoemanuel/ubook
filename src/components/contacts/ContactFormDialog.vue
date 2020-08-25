<template>
  <modal v-model="value" class="new-contact-modal">
    <template slot="header">
      <div class="form-header">
        <span>{{ formHeaderText }}</span>
      </div>
      <divider />
    </template>
    <div class="form-content">
      <contact-form v-bind.sync="contactData" :validations="$v.contactData" @saveShortcut="save"></contact-form>
    </div>
    <template slot="footer">
      <divider />
      <div class="actions-container">
        <btn flat @click="close()">Cancelar</btn>
        <btn color="#fa7268" textColor="white" class="save-btn" @click="save" :disabled="$v.$invalid" data-cy="save-contact-btn">Salvar</btn>
      </div>
    </template>
  </modal>
</template>

<script>
import { email } from 'vuelidate/lib/validators';
import Modal from '@/components/app/Modal.vue';
import Btn from '@/components/app/Btn.vue';
import ContactForm from '@/components/contacts/ContactForm.vue';
import Divider from '@/components/app/Divider.vue';
import { phone, notAllEmptyProps } from '@/validation/validators';
const CONTACT_BASE_STATE = { name: '', phone: '', email: '' };

export default {
  name: 'ContactFormDialog',
  components: {
    Modal,
    Btn,
    ContactForm,
    Divider
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    contact: {
      type: Object
    }
  },
  data() {
    return {
      contactData: { ...CONTACT_BASE_STATE }
    };
  },
  methods: {
    save() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit('save', { ...this.contactData });
        this.close();
      }
    },
    close() {
      this.contactData = { ...CONTACT_BASE_STATE };
      this.$emit('input', false);
    }
  },
  computed: {
    formHeaderText() {
      return this.contact && Object.keys(this.contact).length ? 'Editar contato' : 'Criar novo contato';
    }
  },
  watch: {
    contact: {
      handler(val) {
        this.contactData = Object.assign(this.contactData, { ...val });
      },
      deep: true
    }
  },
  validations: {
    contactData: {
      notEmptyProps: notAllEmptyProps(['name', 'email', 'phone']),
      email: {
        email
      },
      phone: {
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

.actions-container {
  display: flex;
  justify-content: flex-end;
  margin: 24px 16px;
}

.save-btn {
  margin-left: 16px;
}

@media (min-width: 600px) {
  .new-contact-modal .modal-dialog {
    width: 432px;
  }
}
</style>
