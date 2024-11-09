import { mount } from "@vue/test-utils";
import ContactList from "../src/components/ContactList.vue";
import ContactItem from "../src/components/ContactItem.vue";

// Пример фейковых данных для тестирования
const fakeContacts = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

describe("ContactList.vue", () => {
  it("renders a list of contacts", () => {
    const wrapper = mount(ContactList, {
      props: {
        contacts: fakeContacts,
      },
    });

    // Проверяем, что компонент ContactItem рендерится для каждого контакта
    const contactItems = wrapper.findAllComponents(ContactItem);
    expect(contactItems.length).toBe(fakeContacts.length);
  });

  it("emits deleteContact event when delete button is clicked", async () => {
    const wrapper = mount(ContactList, {
      props: {
        contacts: fakeContacts,
      },
    });

    // Находим кнопку удаления в первом элементе списка
    const deleteButton = wrapper
      .findAllComponents(ContactItem)[0]
      .find(".delete-button");

    // Имитируем клик по кнопке
    await deleteButton.trigger("click");

    // Проверяем, что событие deleteContact было вызвано с правильным id
    expect(wrapper.emitted().deleteContact).toBeTruthy();
    expect(wrapper.emitted().deleteContact[0]).toEqual([fakeContacts[0].id]);
  });

  it("emits updateContact event when edit is submitted", async () => {
    const wrapper = mount(ContactList, {
      props: {
        contacts: fakeContacts,
      },
    });

    // Имитируем обновление контакта
    const updatedContact = { ...fakeContacts[0], name: "John Updated" };
    await wrapper.vm.submitEdit(updatedContact);

    // Проверяем, что событие updateContact было вызвано с правильным обновленным контактом
    expect(wrapper.emitted().updateContact).toBeTruthy();
    expect(wrapper.emitted().updateContact[0]).toEqual([updatedContact]);
  });
});

