const { Command } = require("commander");
const program = new Command();

// const contacts = require("./contacts");
const contacts = require("./db");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      return contacts.listContacts();
      break;

    case "get":
      return contacts.getContactById(id);
      break;

    case "add":
      return contacts.addContact(id, name, email, phone);
      break;

    case "remove":
      return contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// const contactsOperation = require("./db");

// const workWithContacts = async (type = "listContacts", id, data) => {
//   try {
//     switch (type) {
//       case "listContacts":
//         return await contactsOperation.listContacts();
//       case "getContactById":
//         return await contactsOperation.getContactById(id);
//       case "addContact":
//         return await contactsOperation.addContact(data);
//
//       case "removeContact":
//         return await contactsOperation.removeContact(id);
//     }
//   } catch (error) {
//     throw error;
//   }
// };

// workWithContacts("listContacts")
//   .then((data) => console.table(data))
//   .catch((error) => console.log(error));

// workWithContacts("getContactById", 5)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const newData = {
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322 - 22 - 22",
// };

// workWithContacts("addContact", "", newData)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// workWithContacts("removeContact", 3)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
