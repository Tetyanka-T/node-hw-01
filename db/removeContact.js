const listContacts = require("./listContacts");
const updateContacts = require("./updateContact");

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((item) => item.id !== id);

  await updateContacts(newContacts);

  return "Success remove";
};

module.exports = removeContact;
