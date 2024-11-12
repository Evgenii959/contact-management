<template>
  <div class="mb-4">
    <Form @submit="submitForm">
      <div class="space-y-2">
        <div>
          <Field
            v-model="name"
            name="name"
            placeholder="Имя"
            class="w-full p-2 border rounded"
            validate-on-input
          />
          <span v-if="nameError" class="text-red-500 text-sm">{{ nameError }}</span>
        </div>
        <div>
          <Field
            v-model="phone"
            name="phone"
            placeholder="Телефон"
            class="w-full p-2 border rounded"
            validate-on-input
          />
          <span v-if="phoneError" class="text-red-500 text-sm">{{ phoneError }}</span>
        </div>
        <div>
          <Field
            v-model="email"
            name="email"
            type="email"
            placeholder="Email"
            class="w-full p-2 border rounded"
            validate-on-input
          />
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
        </div>
      </div>
      <button
        type="submit"
        class="mt-4 w-full p-2 bg-blue-500 text-white rounded"
      >
        Сохранить
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Form, Field, useForm, useField } from "vee-validate";
import * as yup from "yup";
import { Contact } from "../fakeContacts";

type FormValues = {
  name: string;
  phone: string;
  email: string;
};

const schema = yup.object({
  name: yup
    .string()
    .required("Имя обязательно")
    .min(2, "Минимальная длина имени 2 символа"),
  phone: yup
    .string()
    .required("Телефон обязателен")
    .min(10, "Телефон должен быть не менее 10 символов"),
  email: yup
    .string()
    .required("Email обязателен")
    .email("Введите корректный email"),
});

const { handleSubmit: formSubmitHandler, resetForm } = useForm<{
  name: string;
  phone: string;
  email: string;
}>({
  validationSchema: schema,
});

const { value: name, errorMessage: nameError } = useField("name");
const { value: phone, errorMessage: phoneError } = useField("phone");
const { value: email, errorMessage: emailError } = useField("email");

const props = defineProps<{
  contacts: Contact[];
  saveContactsToLocalStorage: () => void;
}>();

const emit = defineEmits(["save", "close"]);

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

const localContacts = ref<Contact[]>([...props.contacts]);

const createNewContact = async (values: FormValues): Promise<void> => {
  const newContact: Contact = {
    id: Date.now(),
    name: values.name,
    phone: values.phone,
    email: values.email,
  };
  localContacts.value = [newContact, ...localContacts.value];
  props.saveContactsToLocalStorage();
  emit("save", newContact);
  resetForm({ values: initialValues });
};

const submitForm: any = formSubmitHandler(createNewContact);
</script>
