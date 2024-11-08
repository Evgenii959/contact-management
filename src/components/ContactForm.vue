<template>
  <div class="mb-4">
    <form @submit.prevent="save">
      <div class="space-y-2">
        <div>
          <input
            v-model="form.name"
            type="text"
            placeholder="Имя"
            class="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            v-model="form.phone"
            type="text"
            placeholder="Телефон"
            class="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="w-full p-2 border rounded"
          />
        </div>
      </div>
      <button type="submit" class="mt-4 w-full p-2 bg-blue-500 text-white rounded">
        Сохранить
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, inject, Ref } from "vue";
import { Contact } from "../fakeContacts";

const contacts = inject('contacts') as Ref<Contact[]>;
const saveContactsToLocalStorage = inject('saveContactsToLocalStorage') as () => void;

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
  const index = contacts.value.findIndex((contact) => contact.id === form.value.id);
  contacts.value[index] = { ...form.value };
  saveContactsToLocalStorage();
  emit("save", form.value);
  emit("close");
};

const createNewContact = () => {
  form.value.id = Date.now();
  contacts.value.unshift({ ...form.value });
  saveContactsToLocalStorage();
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
