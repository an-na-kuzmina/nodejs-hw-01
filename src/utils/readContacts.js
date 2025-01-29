import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log('Успішне читання даних!');
    return JSON.parse(data) || [];
  } catch (error) {
    console.error('Помилка читання даних:', error);
    return [];
  }
};
