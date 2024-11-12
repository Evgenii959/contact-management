<template>
  <li class="flex justify-between items-center p-4 border rounded">
    <div>
      <div v-if="!isEditing">
        <p>{{ editedContact.name }}</p>
        <p class="text-sm text-gray-500">
          {{ editedContact.phone }} | {{ editedContact.email }}
        </p>
      </div>
      <div v-else>
        <input
          v-model="editedContact.name"
          type="text"
          placeholder="Имя"
          class="w-full p-1 border rounded mb-1"
        />
        <input
          v-model="editedContact.phone"
          type="text"
          placeholder="Телефон"
          class="w-full p-1 border rounded mb-1"
        />
        <input
          v-model="editedContact.email"
          type="email"
          placeholder="Email"
          class="w-full p-1 border rounded"
        />
      </div>
    </div>
    <div class="flex space-x-4">
      <button
        v-if="!isEditing"
        @click="toggleEditForm"
        class="text-blue-500 hover:opacity-75 transition-opacity duration-300"
      >
        Редактировать
      </button>
      <button
        v-else
        @click="saveContact"
        class="text-green-500 hover:opacity-75 transition-opacity duration-300"
      >
        Сохранить
      </button>
      <button
        class="delete-button text-red-500 hover:opacity-75 transition-opacity duration-300"
        @click="deleteContact"
      >
        Удалить
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Contact } from "../fakeContacts";

const props = defineProps({
  contact: {
    type: Object as () => Contact,
    required: true,
  },
});

const emit = defineEmits<{
  (event: "delete", contactId: number): void;
}>();

const isEditing = ref(false);
const editedContact = ref<Contact>({ ...props.contact });

const toggleEditForm = () => {
  isEditing.value = true;
};

const saveContact = () => {
  updateLocalStorageAfterEdit(editedContact.value);
  isEditing.value = false;
};

const deleteContact = () => {
  if (confirm("Вы уверены, что хотите удалить этот контакт?")) {
    emit("delete", props.contact.id);
  }
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
