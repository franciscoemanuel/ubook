<template>
  <div class="contacts-container">
    <card class="no-border contacts-grid-header-container">
      <template name="avatar"></template>
      <div class="contacts-grid-header">
        <span>Contatos</span>
        <span>E-mail</span>
        <span>Telefone</span>
        <span></span>
      </div>
    </card>
    <div class="contact-info-row" v-for="contact in contacts" :key="contact.id">
      <divider class="grid-divider" />
      <contact-card
        class="no-border contact-info-card"
        @delete="$emit('deleteContact', contact.id)"
        @edit="$emit('editContact', contact)"
        v-bind="contact"
      ></contact-card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/app/Card.vue';
import ContactCard from '@/components/contacts/ContactCard.vue';
import Divider from '@/components/app/Divider.vue';

export default {
  name: 'ContactsGrid',
  components: {
    ContactCard,
    Card,
    Divider
  },
  props: {
    contacts: {
      type: Array
    }
  }
};
</script>

<style scoped>
.contacts-container {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 10px;
}

.contacts-grid-header {
  margin-left: 40px;
  padding-top: 8px;
  padding-bottom: 1px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  align-items: center;
  font-size: 14px;
  color: #9198af;
}

.contact-info-card:hover {
  background-color: #fff3f2;
  cursor: pointer;
}

.contacts-grid-header-container {
  display: none;
}

.grid-divider {
  display: none;
}

@media (min-width: 700px) {
  .contacts-grid-header-container {
    display: flex;
  }

  .grid-divider {
    display: block;
  }

  .no-border {
    border: none;
  }

  .contacts-container {
    border: solid 1px #e1e1e1;
    gap: 0px;
  }
}
</style>
