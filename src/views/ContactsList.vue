<template>
  <base-layout>
    <template slot="actions">
      <btn prepend-icon="add" v-show="contacts.length" @click="openContactFormDialog = true">Criar contato</btn>
    </template>
    <empty-content class="empty-content" v-if="!contacts.length">
      <template slot="image">
        <img src="@/assets/images/ic-book.svg" />
      </template>
      <span>Nenhum contato foi criado ainda.</span>
      <template slot="actions">
        <btn prepend-icon="add" @click.native="openContactFormDialog = true">Criar contato</btn>
      </template>
    </empty-content>
    <contacts-grid
      @deleteContact="handleContactDelete"
      @editContact="handleContactUpdate"
      :contacts="orderedContacts"
      v-else
      class="contacts-grid"
    ></contacts-grid>
    <contact-form-dialog v-model="openContactFormDialog" :contact="contactToUpdate" @save="save"></contact-form-dialog>
    <delete-contact-dialog v-model="openDeleteContactDialog" @deleteConfirmed="deleteContact"></delete-contact-dialog>
  </base-layout>
</template>

<script>
import { mapActions } from 'vuex';
import BaseLayout from '@/layouts/BaseLayout.vue';
import EmptyContent from '@/components/app/EmptyContent.vue';
import Btn from '@/components/app/Btn.vue';
import ContactFormDialog from '@/components/contacts/ContactFormDialog.vue';
import ContactsGrid from '@/components/contacts/ContactsGrid.vue';
import DeleteContactDialog from '@/components/contacts/DeleteContactDialog.vue';
import { clone } from '@/utils';

export default {
  name: 'ContactsList',
  components: {
    BaseLayout,
    EmptyContent,
    Btn,
    ContactFormDialog,
    ContactsGrid,
    DeleteContactDialog
  },
  data() {
    return {
      openDeleteContactDialog: false,
      openEditContactDialog: false,
      openContactFormDialog: false,
      contacts: [],
      contactToUpdate: {},
      contactToDelete: '',
      showSnack: false
    };
  },
  methods: {
    ...mapActions('app', ['showSnackbar']),
    save(contactData) {
      if (contactData.id) {
        this.updateContact(contactData);
        this.showSnackbar({ message: 'Contato atualizado com sucesso', icon: 'done', closable: true });
      } else {
        this.addNewContact(contactData);
        this.showSnackbar({ message: 'Contato adcionado com sucesso', icon: 'done', closable: true });
      }
    },
    addNewContact(contactData) {
      const id = Math.random()
        .toString(36)
        .substr(2, 9);

      this.contacts.push({ ...contactData, id, createdAt: new Date().valueOf() });
    },
    updateContact(contactToUpdate) {
      const contactToUpdateIndex = this.contacts.findIndex(contact => contact.id === contactToUpdate.id);
      const newContactsData = clone(this.contacts);
      newContactsData[contactToUpdateIndex] = contactToUpdate;
      this.contacts = newContactsData;
      this.contactToUpdate = {};
    },
    deleteContact() {
      const contactToDeleteIndex = this.contacts.findIndex(contact => contact.id === this.contactToDelete);
      const newContactsData = clone(this.contacts);
      newContactsData.splice(contactToDeleteIndex, 1);
      this.contacts = newContactsData;
      this.showSnackbar({ message: 'Contato excluído com sucesso', icon: 'done', closable: true });
    },
    handleContactDelete(contactId) {
      this.openDeleteContactDialog = true;
      this.contactToDelete = contactId;
    },
    handleContactUpdate(contactToUpdate) {
      this.contactToUpdate = clone(contactToUpdate);
      this.openContactFormDialog = true;
    }
  },
  computed: {
    orderedContacts() {
      const contacts = clone(this.contacts);
      return contacts.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    }
  }
};
</script>

<style>
.empty-content {
  margin-top: 10em;
}

.contacts-grid {
  margin-top: 32px;
}
</style>
