<template>
  <base-layout>
    <empty-content class="empty-content">
      <template slot="image">
        <img src="@/assets/images/ic-book.svg" />
      </template>
      <span>Nenhum contato foi criado ainda.</span>
      <template slot="actions">
        <btn prepend-icon="add" @click.native="isModalOpen = true">Criar contato</btn>
      </template>
    </empty-content>
    <new-contact-dialog v-model="isModalOpen"></new-contact-dialog>
  </base-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import EmptyContent from '@/components/app/EmptyContent.vue';
import Btn from '@/components/app/Btn.vue';
import NewContactDialog from '@/components/contacts/NewContactDialog.vue';

export default {
  name: 'ContactsList',
  components: {
    BaseLayout,
    EmptyContent,
    Btn,
    NewContactDialog
  },
  data() {
    return {
      isModalOpen: false
    };
  }
};
</script>

<style>
.empty-content {
  margin-top: 10em;
}
</style>
