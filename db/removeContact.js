const listContacts = require("./listContacts");
const updateContacts = require("./updateContact");

const removeContact = async (id) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((contact) => contact.id === Number(id));
    if (idx === -1) {
      return null;
    }
    contacts.splice(idx, 1);
    await updateContacts(contacts);
    console.table(contacts);
    return "Success remove";
  } catch (error) {
    throw new error();
  }
};

module.exports = removeContact;
