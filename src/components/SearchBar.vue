<template>
  <div class="mb-8 flex">
    <input
      type="text"
      v-model="localSearchQuery"
      placeholder="Поиск контакта..."
      class="w-full p-2 border rounded"
    />
    <button
      @click="emitSearch"
      class="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:opacity-75 transition-opacity duration-300"
    >
      Поиск
    </button>
    <button
      @click="showAllContacts"
      class="hover:opacity-75 transition-opacity duration-300"
    >
      Все контакты
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "resetSearchQuery"]);

const localSearchQuery = ref(props.modelValue);

const emitSearch = () => {
  emit("update:modelValue", localSearchQuery.value);
};

const showAllContacts = () => {
  localSearchQuery.value = "";
  emit("update:modelValue", "");
  emit("resetSearchQuery");
};
</script>

<style scoped></style>
