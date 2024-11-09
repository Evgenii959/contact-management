<template>
  <div>
    <li class="flex justify-between items-center p-2 border rounded">
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
      <div class="flex space-x-2">
        <button v-if="!isEditing" @click="toggleEditForm" class="text-blue-500">
          Редактировать
        </button>
        <button v-else @click="saveContact" class="text-green-500">
          Сохранить
        </button>
        <button @click="deleteContact" class="text-red-500">Удалить</button>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

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
const editedContact = ref<Contact>({ ...props.contact });
console.log(editedContact.value.name)

const toggleEditForm = () => {
  isEditing.value = true;
};

const saveContact = () => {
  emit("edit", editedContact.value);
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
