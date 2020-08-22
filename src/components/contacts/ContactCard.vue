<template>
  <card>
    <template name="avatar">
      <contact-avatar>{{ avatarText }}</contact-avatar>
    </template>

    <div class="contact-info-grid">
      <span>{{ name }}</span>
      <span>{{ email }}</span>
      <span>{{ phone }}</span>
      <div class="actions-buttons-container">
        <btn flat @click="$emit('edit')"> <i class="material-icons-outlined action-btn">edit</i></btn>
        <btn flat @click="$emit('delete')">
          <i class="material-icons-outlined action-btn"><i class="material-icons action-btn">delete</i></i></btn
        >
      </div>
    </div>
  </card>
</template>

<script>
import Card from '@/components/app/Card.vue';
import Btn from '@/components/app/Btn.vue';
import ContactAvatar from '@/components/contacts/ContactAvatar.vue';

export default {
  name: 'ContactCard',
  components: {
    Card,
    Btn,
    ContactAvatar
  },
  props: {
    name: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    }
  },
  computed: {
    avatarText() {
      const [firstNameLetter] = this.name.match(/[a-zA-Z]/g) || [];
      return firstNameLetter || '?';
    }
  }
};
</script>

<style scoped>
.contact-info-grid {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  align-items: center;
}

.action-btn {
  color: #9198af;
}

.actions-buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
}
</style>
