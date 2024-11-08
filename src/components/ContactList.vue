<template>
  <div>
    <h2>Список контактов</h2>
    <ul class="space-y-2">
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="deleteContact"
        :submitEdit="submitEdit"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { Contact } from "../fakeContacts";
import ContactItem from "./ContactItem.vue";

const props = defineProps<{
  contacts: Contact[];
}>();


const editingContact = ref<Contact | null>(null);

const emit = defineEmits<{
  (event: 'deleteContact', contactId: number): void;
  (event: 'updateContact', updatedContact: Contact): void;
}>();

const deleteContact = (contactId: number) => {
  emit("deleteContact", contactId);
  localStorage.setItem("contacts", JSON.stringify(props.contacts));
};

const submitEdit = (updatedContact: Contact) => {
  emit("updateContact", updatedContact);
  editingContact.value = null;
};
</script>

<style scoped></style>
