import { ref, computed, onMounted } from "vue";
import SearchBar from "./components/SearchBar.vue";
import ContactForm from "./components/ContactForm.vue";
import ContactList from "./components/ContactList.vue";
import { getContacts } from "./api/getContacts";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const searchQuery = ref("");
const contacts = ref([]);
const fetchContacts = async () => {
    const cachedContacts = localStorage.getItem("contacts");
    if (cachedContacts) {
        contacts.value = JSON.parse(cachedContacts);
    }
    else {
        try {
            const response = await getContacts();
            contacts.value = response.data;
            saveContactsToLocalStorage();
        }
        catch (error) {
            console.error("Ошибка при получении контактов:", error);
        }
    }
};
const saveNewContact = (newContact) => {
    contacts.value = [newContact, ...contacts.value];
    saveContactsToLocalStorage();
};
const updateSearchQuery = (query) => {
    searchQuery.value = query;
    localStorage.setItem("searchQuery", query);
};
const deleteContact = (contactId) => {
    const index = contacts.value.findIndex((contact) => contact.id === contactId);
    if (index !== -1) {
        contacts.value.splice(index, 1);
        saveContactsToLocalStorage();
    }
};
const filteredContacts = computed(() => {
    if (!searchQuery.value) {
        return contacts.value;
    }
    return contacts.value.filter((contact) => {
        return ((contact.name &&
            contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
            (contact.phone && contact.phone.includes(searchQuery.value)) ||
            (contact.email &&
                contact.email.toLowerCase().includes(searchQuery.value.toLowerCase())));
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mx-auto p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl mb-4 text-center") }, });
    // @ts-ignore
    [SearchBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(SearchBar, new SearchBar({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onResetSearchQuery': {} }, modelValue: ((__VLS_ctx.searchQuery)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onUpdate:modelValue': {} }, ...{ 'onResetSearchQuery': {} }, modelValue: ((__VLS_ctx.searchQuery)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        'onUpdate:modelValue': (__VLS_ctx.updateSearchQuery)
    };
    const __VLS_7 = {
        onResetSearchQuery: (__VLS_ctx.resetSearchQuery)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    // @ts-ignore
    [ContactForm,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(ContactForm, new ContactForm({ ...{ 'onSave': {} }, contacts: ((__VLS_ctx.filteredContacts)), saveContactsToLocalStorage: ((__VLS_ctx.saveContactsToLocalStorage)), }));
    const __VLS_9 = __VLS_8({ ...{ 'onSave': {} }, contacts: ((__VLS_ctx.filteredContacts)), saveContactsToLocalStorage: ((__VLS_ctx.saveContactsToLocalStorage)), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    let __VLS_13;
    const __VLS_14 = {
        onSave: (__VLS_ctx.saveNewContact)
    };
    let __VLS_10;
    let __VLS_11;
    var __VLS_12;
    // @ts-ignore
    [ContactList,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(ContactList, new ContactList({ ...{ 'onDeleteContact': {} }, contacts: ((__VLS_ctx.filteredContacts)), }));
    const __VLS_16 = __VLS_15({ ...{ 'onDeleteContact': {} }, contacts: ((__VLS_ctx.filteredContacts)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_20;
    const __VLS_21 = {
        onDeleteContact: (__VLS_ctx.deleteContact)
    };
    let __VLS_17;
    let __VLS_18;
    var __VLS_19;
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['text-3xl'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-center'];
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
            SearchBar: SearchBar,
            ContactForm: ContactForm,
            ContactList: ContactList,
            searchQuery: searchQuery,
            saveNewContact: saveNewContact,
            updateSearchQuery: updateSearchQuery,
            deleteContact: deleteContact,
            filteredContacts: filteredContacts,
            saveContactsToLocalStorage: saveContactsToLocalStorage,
            resetSearchQuery: resetSearchQuery,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
