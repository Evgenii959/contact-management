import { mount } from "@vue/test-utils";
import ContactList from "../src/components/ContactList.vue";
import { Contact } from "../src/fakeContacts";

const fakeContacts: Contact[] = [
  { id: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com" },
  {
    id: 2,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
  },
];

describe("ContactList.vue", () => {
  it("генерирует событие deleteContact при нажатии кнопки удаления в дочернем компоненте", async () => {
    const wrapper = mount(ContactList, {
      props: {
        contacts: fakeContacts,
      },
    });

    const confirmSpy = jest.spyOn(window, "confirm").mockReturnValue(true);

    const deleteButton = wrapper.findAll("button.delete-button")[0];
    expect(deleteButton.text()).toBe("Удалить");
    await deleteButton.trigger("click");

    const emittedEvents = wrapper.emitted("deleteContact");
    expect(emittedEvents).toBeTruthy();
    expect(emittedEvents![0]).toEqual([fakeContacts[0].id]);

      confirmSpy.mockRestore();
  });
});
