<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl mb-4 text-center">Управление контактами</h1>
    <SearchBar
      :modelValue="searchQuery"
      @update:modelValue="updateSearchQuery"
      @resetSearchQuery="resetSearchQuery"
    />
    <ContactForm
      :contacts="filteredContacts"
      @save="clearSearchQuery"
      :saveContactsToLocalStorage="saveContactsToLocalStorage"
    />
    <ContactList
      :contacts="filteredContacts"
      @deleteContact="deleteContact"
      @updateContact="updateContact"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import SearchBar from "./components/SearchBar.vue";
import ContactForm from "./components/ContactForm.vue";
import ContactList from "./components/ContactList.vue";
import { Contact } from "./fakeContacts";
import { getContacts } from "./api/getContacts";

const searchQuery = ref("");
const contacts = ref<Contact[]>([]);

const updateSearchQuery = (query: string) => {
  searchQuery.value = query;
  localStorage.setItem("searchQuery", query);
};

const clearSearchQuery = () => {
  searchQuery.value = "";
  saveContactsToLocalStorage();
  localStorage.removeItem("searchQuery");
};

const fetchContacts = async () => {
  const cachedContacts = localStorage.getItem("contacts");

  if (cachedContacts) {
    contacts.value = JSON.parse(cachedContacts);
  } else {
    try {
      const response = await getContacts();
      contacts.value = response.data;
      localStorage.setItem("contacts", JSON.stringify(response.data));
    } catch (error) {
      console.error("Ошибка при получении контактов:", error);
    }
  }
};

const deleteContact = (contactId: number) => {
  const index = contacts.value.findIndex((contact) => contact.id === contactId);
  contacts.value.splice(index, 1);
  saveContactsToLocalStorage();
};

const updateContact = (updatedContact: Contact) => {
  const index = contacts.value.findIndex((c) => c.id === updatedContact.id);
  if (index !== -1) {
    contacts.value[index] = updatedContact;
    localStorage.setItem("contacts", JSON.stringify(contacts.value));
  }
};

const filteredContacts = computed(() => {
  if (!searchQuery.value) {
    return contacts.value;
  }
  return contacts.value.filter((contact) => {
    return (
      (contact.name && contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      (contact.phone && contact.phone.includes(searchQuery.value)) ||
      (contact.email && contact.email.toLowerCase().includes(searchQuery.value.toLowerCase()))
    );
  });
});

const saveContactsToLocalStorage = () => {
  localStorage.setItem("contacts", JSON.stringify(contacts.value));
};

const resetSearchQuery = () => {
  searchQuery.value = "";
  localStorage.removeItem("searchQuery");
};

onMounted(() => {
  const savedSearchQuery = localStorage.getItem("searchQuery");
  if (savedSearchQuery) {
    searchQuery.value = savedSearchQuery;
  }
  fetchContacts();
});
</script>
