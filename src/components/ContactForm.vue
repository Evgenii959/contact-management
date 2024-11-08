<template>
  <div class="mb-4">
    <form @submit.prevent="save">
      <div class="space-y-2">
        <input
          v-model="form.name"
          type="text"
          placeholder="Имя"
          required
          class="w-full p-2 border rounded"
        />
        <input
          v-model="form.phone"
          type="text"
          placeholder="Телефон"
          required
          class="w-full p-2 border rounded"
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
          class="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        class="mt-4 w-full p-2 bg-blue-500 text-white rounded"
      >
        Сохранить
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useContactsStore } from "../store/useContactsStore";
import { Contact } from "../fakeContacts";

const contactsStore = useContactsStore();

const form = ref<Contact>({
  id: null,
  name: "",
  phone: "",
  email: "",
});

const props = defineProps({
  editContact: {
    type: Object as () => Contact | null,
    default: null,
  },
});

const emit = defineEmits(["save", "close"]);

const save = () => {
  if (form.value.id) {
    saveEditedContact();
  } else {
    createNewContact();
  }
};

const saveEditedContact = () => {
  const index = contactsStore.contacts.findIndex(
    (contact) => contact.id === form.value.id
  );
  contactsStore.contacts[index] = { ...form.value };
  localStorage.setItem("contacts", JSON.stringify(contactsStore.contacts));
  emit("save", form.value);
  emit("close");
};

const createNewContact = () => {
  form.value.id = Date.now();
  contactsStore.contacts.unshift({ ...form.value });
  localStorage.setItem("contacts", JSON.stringify(contactsStore.contacts));
  emit("save", form.value);
  form.value = { id: null, name: "", phone: "", email: "" };
};

watch(
  () => props.editContact,
  (newValue) => {
    if (newValue) {
      form.value = { ...newValue };
    }
  },
  { immediate: true }
);
</script>

<style scoped></style>
