export interface Contact {
  id: number | undefined  | null;
  name: string;
  phone: string;
  email: string;
}

export const fakeContacts: Contact[] = [
  {
    id: 1,
    name: "Иван Иванов",
    phone: "123-456-7890",
    email: "ivan@example.com",
  },
  {
    id: 2,
    name: "Мария Смирнова",
    phone: "987-654-3210",
    email: "maria@example.com",
  },
  {
    id: 3,
    name: "Алексей Петров",
    phone: "456-789-0123",
    email: "alexey@example.com",
  },
  {
    id: 4,
    name: "Сергей Сидоров",
    phone: "321-654-9870",
    email: "sergey@example.com",
  },
  {
    id: 5,
    name: "Елена Кузнецова",
    phone: "654-123-9876",
    email: "elena@example.com",
  },
  {
    id: 6,
    name: "Ольга Михайлова",
    phone: "789-012-3456",
    email: "olga@example.com",
  },
  {
    id: 7,
    name: "Дмитрий Фёдоров",
    phone: "012-345-6789",
    email: "dmitriy@example.com",
  },
  {
    id: 8,
    name: "Анна Васильева",
    phone: "543-210-9876",
    email: "anna@example.com",
  },
  {
    id: 9,
    name: "Павел Попов",
    phone: "678-123-4567",
    email: "pavel@example.com",
  },
  {
    id: 10,
    name: "Наталья Киселева",
    phone: "789-345-1234",
    email: "natalia@example.com",
  },
];

