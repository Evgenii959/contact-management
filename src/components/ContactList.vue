<template>
  <div>
    <h2>Список контактов</h2>
    <ul class="space-y-2">
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id || -1"
        :contact="contact"
        @delete="deleteContact"
        :submitEdit="submitEdit"
      />
    </ul>
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

<style scoped></style>
