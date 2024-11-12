import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    contact: {
        type: Object,
        required: true,
    },
});
const emit = defineEmits();
const isEditing = ref(false);
const editedContact = ref({ ...props.contact });
const toggleEditForm = () => {
    isEditing.value = true;
};
const saveContact = () => {
    updateLocalStorageAfterEdit(editedContact.value);
    isEditing.value = false;
};
const deleteContact = () => {
    if (confirm("Вы уверены, что хотите удалить этот контакт?")) {
        emit("delete", props.contact.id);
    }
};
const updateLocalStorageAfterEdit = (updatedContact) => {
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    const updatedContacts = contacts.map((contact) => contact.id === updatedContact.id ? updatedContact : contact);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
    __typeEmits: {},
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("flex justify-between items-center p-4 border rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (!__VLS_ctx.isEditing) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.editedContact.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-gray-500") }, });
        (__VLS_ctx.editedContact.phone);
        (__VLS_ctx.editedContact.email);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.editedContact.name)), type: ("text"), placeholder: ("Имя"), ...{ class: ("w-full p-1 border rounded mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.editedContact.phone)), type: ("text"), placeholder: ("Телефон"), ...{ class: ("w-full p-1 border rounded mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), placeholder: ("Email"), ...{ class: ("w-full p-1 border rounded") }, });
        (__VLS_ctx.editedContact.email);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex space-x-4") }, });
    if (!__VLS_ctx.isEditing) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleEditForm) }, ...{ class: ("text-blue-500 hover:opacity-75 transition-opacity duration-300") }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.saveContact) }, ...{ class: ("text-green-500 hover:opacity-75 transition-opacity duration-300") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.deleteContact) }, ...{ class: ("delete-button text-red-500 hover:opacity-75 transition-opacity duration-300") }, });
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-1'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['hover:opacity-75'];
    __VLS_styleScopedClasses['transition-opacity'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['text-green-500'];
    __VLS_styleScopedClasses['hover:opacity-75'];
    __VLS_styleScopedClasses['transition-opacity'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['delete-button'];
    __VLS_styleScopedClasses['text-red-500'];
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
            isEditing: isEditing,
            editedContact: editedContact,
            toggleEditForm: toggleEditForm,
            saveContact: saveContact,
            deleteContact: deleteContact,
        };
    },
    __typeEmits: {},
    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
