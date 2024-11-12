import { fakeContacts } from '../fakeContacts';
export const getContacts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: fakeContacts });
        }, 500);
    });
};
