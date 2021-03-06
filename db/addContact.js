const { nanoid } = require("nanoid");
const fs = require("fs/promises");
const updateContacts = require("./updateContact");
const listContacts = require("./listContacts");

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const id = nanoid();
    const newContact = { id, name, email, phone };

    contacts.push(newContact);

    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
