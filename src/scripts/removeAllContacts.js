import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(emptyContacts, null, 2),
      'utf-8',
    );
    console.log('Контакти успішно видалені.');
  } catch (error) {
    console.error('Помилка видалення контактів:', error);
  }
};

removeAllContacts();
