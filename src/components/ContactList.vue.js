import ContactItem from "./ContactItem.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps();
const emit = defineEmits();
const deleteContact = (contactId) => {
    emit("deleteContact", contactId);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("mb-4 ml-4") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.TransitionGroup;
    /** @type { [typeof __VLS_components.TransitionGroup, typeof __VLS_components.TransitionGroup, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("fade"), tag: ("ul"), ...{ class: ("space-y-2") }, }));
    const __VLS_2 = __VLS_1({ name: ("fade"), tag: ("ul"), ...{ class: ("space-y-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [contact] of __VLS_getVForSourceType((__VLS_ctx.contacts))) {
        // @ts-ignore
        [ContactItem,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(ContactItem, new ContactItem({ ...{ 'onDelete': {} }, key: ((contact.id)), contact: ((contact)), }));
        const __VLS_7 = __VLS_6({ ...{ 'onDelete': {} }, key: ((contact.id)), contact: ((contact)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        let __VLS_11;
        const __VLS_12 = {
            onDelete: (__VLS_ctx.deleteContact)
        };
        let __VLS_8;
        let __VLS_9;
        var __VLS_10;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['ml-4'];
    __VLS_styleScopedClasses['space-y-2'];
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
            ContactItem: ContactItem,
            deleteContact: deleteContact,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
