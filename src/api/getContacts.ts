import { fakeContacts } from '../fakeContacts';

export const getContacts = async () => {
  return new Promise<{ data: typeof fakeContacts }>((resolve) => {
    setTimeout(() => {
      resolve({ data: fakeContacts });
    }, 500);
  });
};
