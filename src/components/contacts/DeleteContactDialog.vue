<template>
  <modal v-model="value" class="delete-contact-modal">
    <template slot="header">
      <div class="form-header">
        <span>Excluir contato </span>
      </div>
      <divider />
    </template>
    <span class="warning-text">Deseja realmente excluir o contato?</span>

    <template slot="footer">
      <divider />
      <div class="actions-container">
        <btn flat @click="close()">Cancelar</btn>
        <btn color="#fa7268" textColor="white" class="delete-btn" @click="confirmDelete()">Excluir</btn>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/app/Modal.vue';
import Btn from '@/components/app/Btn.vue';
import Divider from '@/components/app/Divider.vue';

export default {
  name: 'DeleteContactDialog',
  components: {
    Modal,
    Btn,
    Divider
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    confirmDelete() {
      this.$emit('deleteConfirmed');
      this.close();
    },
    close() {
      this.$emit('input', false);
    }
  }
};
</script>

<style>
.delete-contact-modal .modal-dialog {
  width: 432px;
}

.warning-text {
  margin-top: 20px;
  margin-bottom: 57px;
  margin-left: 24px;
  display: block;
  font-weight: 500;
  font-size: 14px;
}

.actions-container {
  display: flex;
  justify-content: flex-end;
  margin: 24px 16px;
}

.delete-btn {
  margin-left: 16px;
}
</style>
