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

const emit = defineEmits(["deleteContact"]);
const deleteContact = (contactId: number) => {
  emit("deleteContact", contactId);
};

const submitEdit = (updatedContact: Contact) => {
  console.log(updatedContact);
  const index = props.contacts.findIndex((c) => c.id === updatedContact.id);
  props.contacts[index] = updatedContact;
  editingContact.value = null;
};
</script>

<style scoped></style>
