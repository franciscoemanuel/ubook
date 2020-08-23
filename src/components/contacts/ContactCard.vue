<template>
  <card :class="{ highlight, 'contact-card': true }">
    <template name="avatar">
      <contact-avatar>{{ avatarText }}</contact-avatar>
    </template>

    <div class="contact-info-grid">
      <span>{{ name }}</span>
      <span>{{ email }}</span>
      <span>{{ phone }}</span>
      <div class="actions-buttons-container">
        <btn flat @click="$emit('edit')">
          <i class="material-icons-outlined action-btn">edit</i>
        </btn>
        <btn flat @click="$emit('delete')">
          <i class="material-icons-outlined action-btn">
            <i class="material-icons action-btn">delete</i>
          </i>
        </btn>
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
    },
    createdAt: {
      type: Number
    },
    highlightDelay: {
      type: Number,
      default: 10000 // ms
    }
  },
  data() {
    return {
      highlight: false,
      activeHightlightTimeout: {}
    };
  },
  computed: {
    avatarText() {
      const [firstNameLetter] = this.name.match(/[a-zA-Z]/g) || [];
      return firstNameLetter ? firstNameLetter.toUpperCase() : '?';
    }
  },
  methods: {
    checkForHighlight() {
      window.clearTimeout(this.activeHightlightTimeout);
      const createdAtDiff = new Date().valueOf() - this.createdAt;
      const isRecentlyCreated = createdAtDiff <= this.highlightDelay;
      if (isRecentlyCreated) {
        this.highlight = true;
        const milisecondsToHighlight = this.highlightDelay - createdAtDiff;
        this.activeHightlightTimeout = setTimeout(() => {
          this.highlight = false;
        }, milisecondsToHighlight);
      }
    }
  },
  watch: {
    createdAt: {
      handler: 'checkForHighlight',
      immediate: true
    }
  }
};
</script>

<style scoped>
.contact-card {
  transition: background-color 0.6s ease-out;
}

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

.highlight {
  background-color: #fff3f2;
}
</style>
