const contacts = require("./contacts")
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        const allContact = contacts.listContacts();
        return console.log(allContact);

    case "get":
        const oneContact = contacts.getContactById(id);
        return console.log(oneContact)

    case "add":
          const newContact = contacts.addContact({ name, email, phone });
          return console.log(newContact);


    case "remove":
        const deletedContact = contacts.removeContact(id);
        return console.log(deletedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);