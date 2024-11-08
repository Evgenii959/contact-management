<template>
  <div>
    <li class="flex justify-between items-center p-2 border rounded">
      <div>
        <p>{{ contact.name }}</p>
        <p class="text-sm text-gray-500">
          {{ contact.phone }} | {{ contact.email }}
        </p>
      </div>
      <div class="flex space-x-2">
        <button @click="toggleEditForm" class="text-blue-500">
          Редактировать
        </button>
        <button @click="deleteContact" class="text-red-500">Удалить</button>
      </div>
    </li>
    <div v-if="isEditing">
      <ContactForm
        :editContact="contact"
        @save="saveContact"
        @close="closeEditForm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import ContactForm from "./ContactForm.vue";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const props = defineProps({
  contact: {
    type: Object as () => Contact,
    required: true,
  },
});

const emit = defineEmits(["edit", "delete"]);

const isEditing = ref(false);

const deleteContact = () => {
  if (confirm("Вы уверены, что хотите удалить этот контакт?")) {
    emit("delete", props.contact.id);
  }
};

const toggleEditForm = () => {
  isEditing.value = !isEditing.value;
};

const saveContact = (updatedContact: Contact) => {
  emit("edit", updatedContact);
  updateLocalStorageAfterEdit(updatedContact);
  closeEditForm();
};

const closeEditForm = () => {
  isEditing.value = false;
};

const updateLocalStorageAfterEdit = (updatedContact: Contact) => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  const updatedContacts = contacts.map((contact: Contact) =>
    contact.id === updatedContact.id ? updatedContact : contact
  );
  localStorage.setItem("contacts", JSON.stringify(updatedContacts));
};
</script>

<style scoped></style>
