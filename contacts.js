const fs = require("fs/promises");
const path = require("path")

const contactsPath = path.join(__dirname, "contacts.json");

// TODO: задокументувати кожну функцію
const listContacts = async() => {
  const data = await fs.readFile("./db/contacts.json");
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

// const addContact = async(name, email, phone) => {
//   // ...твій код
// }
module.exports = {
    listContacts,getContactById, removeContact, addContact
};
