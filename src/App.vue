<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl mb-4 text-center">Управление контактами</h1>
    <SearchBar @search="updateSearchQuery" :contacts="filteredContacts" />
    <ContactForm @save="clearSearchQuery" />
    <ContactList :contacts="filteredContacts" @deleteContact="deleteContact" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useContactsStore } from "./store/useContactsStore";
import SearchBar from "./components/SearchBar.vue";
import ContactForm from "./components/ContactForm.vue";
import ContactList from "./components/ContactList.vue";

const contactsStore = useContactsStore();
const { contacts, fetchContacts } = contactsStore;
const searchQuery = ref("");

const updateSearchQuery = (query: string) => {
  searchQuery.value = query;
};

const clearSearchQuery = () => {
  searchQuery.value = "";
  saveContactsToLocalStorage();
};

const deleteContact = (contactId: number) => {
  const index = contacts.findIndex((contact) => contact.id === contactId);
  contacts.splice(index, 1);
  saveContactsToLocalStorage();
};

const filteredContacts = computed(() => {
  if (!searchQuery.value) {
    return contacts;
  }
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      contact.phone.includes(searchQuery.value) ||
      contact.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const saveContactsToLocalStorage = () => {
  localStorage.setItem("contacts", JSON.stringify(contactsStore.contacts));
};


onMounted(() => {
  fetchContacts();
});
</script>
