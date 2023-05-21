const fs = require("fs/promises");
const path = require("path")
const {nanoid} = require('nanoid')

const contactsPath = path.join(__dirname, "contacts.json");

// TODO: задокументувати кожну функцію
const listContacts = async() => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
  };

const getContactById = async(contactId)=> {
  const contacts = listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
}

function removeContact(contactId) {
  const contacts = listContacts();
  const result = contacts.splice((item) => item.id === contactId);
  return result;
}

const addContact = async (data) => {
  const contacts = listContacts();
  const newContact = {
    id: nanoid(),
    ...data
  }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
    listContacts,getContactById, removeContact, addContact
};
