import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-8 flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.localSearchQuery)), placeholder: ("Поиск контакта..."), ...{ class: ("w-full p-2 border rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.emitSearch) }, ...{ class: ("ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:opacity-75 transition-opacity duration-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.showAllContacts) }, ...{ class: ("hover:opacity-75 transition-opacity duration-300") }, });
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:opacity-75'];
    __VLS_styleScopedClasses['transition-opacity'];
    __VLS_styleScopedClasses['duration-300'];
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
            localSearchQuery: localSearchQuery,
            emitSearch: emitSearch,
            showAllContacts: showAllContacts,
        };
    },
    emits: {},
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
