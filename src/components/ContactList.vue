<template>
  <div>
    <h2 class="mb-4 ml-4">Список контактов</h2>
    <TransitionGroup name="fade" tag="ul" class="space-y-2">
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="deleteContact"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { Contact } from "../fakeContacts";
import ContactItem from "./ContactItem.vue";

defineProps<{
  contacts: Contact[];
}>();

const emit = defineEmits<{
  (event: "deleteContact", contactId: number): void;
}>();

const deleteContact = (contactId: number) => {
  emit("deleteContact", contactId);
};
</script>

<style lang="css" scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateY(0);
}

.fade-enter-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}
</style>
