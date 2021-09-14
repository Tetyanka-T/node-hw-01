const contacts = require("./contacts.json");

const listContacts = async () => contacts;
console.table(contacts);

module.exports = listContacts;
