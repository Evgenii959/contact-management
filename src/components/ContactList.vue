<template>
  <div>
    <h2>Список контактов</h2>
      <transition-group name="fade" tag="ul" class="space-y-2">
        <ContactItem
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
          @delete="deleteContact"
          :submitEdit="submitEdit"
        />
      </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { Contact } from "../fakeContacts";
import ContactItem from "./ContactItem.vue";

defineProps<{
  contacts: Contact[];
}>();

const editingContact = ref<Contact | null>(null);

const emit = defineEmits<{
  (event: "deleteContact", contactId: number): void;
  (event: "updateContact", updatedContact: Contact): void;
}>();

const deleteContact = (contactId: number) => {
  emit("deleteContact", contactId);
};

const submitEdit = (updatedContact: Contact) => {
  emit("updateContact", updatedContact);
  editingContact.value = null;
};
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.7s ease;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
