const fs = require("fs/promises");
const path = require("path")

/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
const listContacts = async() => {
    const data = await fs.readFile("./db/contacts.json", "utf-8");
    return console.log(JSON.parse(data))
  };


// const getContactById = async(contactId)=> {
//   // ...твій код
// }

// function removeContact(contactId) {
//   // ...твій код
// }

// const addContact = async(name, email, phone) => {
//   // ...твій код
// }
module.exports = {
    listContacts,
    // getContactById, removeContact, addContact
};
