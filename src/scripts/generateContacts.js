import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
    console.log('Нові контакти успішно згенеровані!');
  } catch (error) {
    console.error('Помилка генерації контактів:', error);
  }
};

generateContacts(5);
