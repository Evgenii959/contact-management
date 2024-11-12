import { ref } from "vue";
import { Form, Field, useForm, useField } from "vee-validate";
import * as yup from "yup";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const phoneRegex = /^[+]?(\d{1,4})?[\s\(\)-]?\d{1,4}[\s\(\)-]?\d{1,4}[\s\(\)-]?\d{1,4}$/;
const schema = yup.object({
    name: yup
        .string()
        .required("Имя обязательно")
        .min(2, "Минимальная длина имени 2 символа"),
    phone: yup
        .string()
        .required("Телефон обязателен")
        .matches(phoneRegex, "Введите корректный номер телефона")
        .min(10, "Телефон должен быть не менее 10 символов"),
    email: yup
        .string()
        .required("Email обязателен")
        .email("Введите корректный email"),
});
const { handleSubmit: formSubmitHandler, resetForm } = useForm({
    validationSchema: schema,
});
const { value: name, errorMessage: nameError } = useField("name");
const { value: phone, errorMessage: phoneError } = useField("phone");
const { value: email, errorMessage: emailError } = useField("email");
const props = defineProps();
const emit = defineEmits(["save", "close"]);
const initialValues = {
    name: "",
    phone: "",
    email: "",
};
const localContacts = ref([...props.contacts]);
const createNewContact = async (values) => {
    const newContact = {
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
const submitForm = formSubmitHandler(createNewContact);
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Form;
    /** @type { [typeof __VLS_components.Form, typeof __VLS_components.Form, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSubmit': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onSubmit': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onSubmit: (__VLS_ctx.submitForm)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("m-2") }, });
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.Field;
    /** @type { [typeof __VLS_components.Field, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ modelValue: ((__VLS_ctx.name)), name: ("name"), placeholder: ("Имя"), ...{ class: ("w-full p-2 border rounded mt-2") }, validateOnInput: (true), }));
    const __VLS_10 = __VLS_9({ modelValue: ((__VLS_ctx.name)), name: ("name"), placeholder: ("Имя"), ...{ class: ("w-full p-2 border rounded mt-2") }, validateOnInput: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    if (__VLS_ctx.nameError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-red-500 text-sm") }, });
        (__VLS_ctx.nameError);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("m-2") }, });
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.Field;
    /** @type { [typeof __VLS_components.Field, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ modelValue: ((__VLS_ctx.phone)), name: ("phone"), placeholder: ("+79771407249"), ...{ class: ("w-full p-2 border rounded mt-2") }, validateOnInput: (true), }));
    const __VLS_16 = __VLS_15({ modelValue: ((__VLS_ctx.phone)), name: ("phone"), placeholder: ("+79771407249"), ...{ class: ("w-full p-2 border rounded mt-2") }, validateOnInput: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    if (__VLS_ctx.phoneError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-red-500 text-sm") }, });
        (__VLS_ctx.phoneError);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("m-2") }, });
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.Field;
    /** @type { [typeof __VLS_components.Field, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.email)), name: ("email"), type: ("email"), placeholder: ("Email"), ...{ class: ("w-full p-2 border rounded mt-2") }, validateOnInput: (true), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.email)), name: ("email"), type: ("email"), placeholder: ("Email"), ...{ class: ("w-full p-2 border rounded mt-2") }, validateOnInput: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    if (__VLS_ctx.emailError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-red-500 text-sm") }, });
        (__VLS_ctx.emailError);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("mt-8 w-full p-2 bg-blue-500 text-white rounded hover:opacity-75 transition-opacity duration-300") }, });
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['m-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['m-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['m-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:opacity-75'];
    __VLS_styleScopedClasses['transition-opacity'];
    __VLS_styleScopedClasses['duration-300'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Form: Form,
            Field: Field,
            name: name,
            nameError: nameError,
            phone: phone,
            phoneError: phoneError,
            email: email,
            emailError: emailError,
            submitForm: submitForm,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
