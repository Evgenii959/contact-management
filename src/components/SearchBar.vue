<template>
  <div class="mb-4 flex">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Поиск контакта..."
      class="w-full p-2 border rounded"
    />
    <button
      @click="emitSearch"
      class="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Поиск
    </button>
    <button @click="showAllContacts">Все контакты</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["search"]);
const searchQuery = ref("");

const emitSearch = () => {
  emit("search", searchQuery.value);
};

const showAllContacts = () => {
  searchQuery.value = "";
  emit("search", searchQuery.value);
};
</script>

<style scoped></style>
