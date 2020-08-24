<template>
  <card :class="{ highlight, 'contact-card': true }">
    <template name="avatar">
      <contact-avatar class="contact-avatar" :color="avatarColor">{{ avatarText }}</contact-avatar>
    </template>

    <div class="contact-info-grid">
      <span data-cy="contact-card-name">{{ name }}</span>
      <span data-cy="contact-card-email">{{ email }}</span>
      <span data-cy="contact-card-phone">{{ phone }}</span>
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
    avatarColor: {
      type: String
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
  computed: {
    avatarText() {
      const [firstNameLetter] = this.name.match(/[a-zA-Z]/g) || [];
      return firstNameLetter ? firstNameLetter.toUpperCase() : '?';
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

<style>
.contact-card {
  transition: background-color 0.6s ease-out;
}

.contact-info-grid {
  display: grid;
  width: 100%;
  align-items: center;
  justify-items: center;
  gap: 10px;
}

.action-btn {
  color: #9198af;
}

.actions-buttons-container {
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
}

.highlight {
  background-color: #fff3f2 !important;
}

@media (min-width: 700px) {
  .contact-info-grid {
    grid-template-columns: 2fr 2fr 2fr 1fr;
    justify-items: flex-start;
    gap: 0px;
  }

  .contact-avatar {
    margin-right: 16px;
  }

  .actions-buttons-container {
    justify-content: flex-end;
  }
}
</style>
