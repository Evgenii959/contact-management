import { defineStore } from "pinia";
import { ref } from "vue";
import { Contact } from "../fakeContacts";
import { getContacts } from "../api/getContacts";

export const useContactsStore = defineStore("contacts", () => {
  const contacts = ref<Contact[]>([]);

  const loadCachedContacts = () => {
    const cachedData = localStorage.getItem("contacts");
    if (cachedData) {
      contacts.value = JSON.parse(cachedData);
    }
  };

  const fetchContacts = async () => {
    if (contacts.value.length > 0) return;

    try {
      const response = await getContacts();
      contacts.value = response.data;

      localStorage.setItem("contacts", JSON.stringify(response.data));
    } catch (error) {
      console.error("Ошибка при получении контактов:", error);
    }
  };

  loadCachedContacts();

  return {
    contacts,
    fetchContacts,
  };
});
