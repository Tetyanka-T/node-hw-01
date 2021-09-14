const { v4 } = require("uuid");
const updateContacts = require("./updateContact");
const listContacts = require("./listContacts");

const addContact = async (id, name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), id, name, email, phone };
  contacts.push(newContact);

  await updateContacts(contacts);
  return newContact;
};

module.exports = addContact;
