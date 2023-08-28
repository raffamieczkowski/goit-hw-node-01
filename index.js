const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
async function testContacts() {
    try {
      const contactsList = await listContacts();
      console.table(contactsList);
  
      const contact = await getContactById('some-contact-id');
      console.log('Contact by ID:', contact);
  
      const newContact = await addContact('Mango', 'mango@gmail.com', '322-22-22');
      console.log('New contact:', newContact);
  
      await removeContact('some-contact-id');
      console.log('Contact removed');
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  testContacts();

const { Command } = require('commander');
const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // Call listContacts()
      break;

    case 'get':
      // Call getContactById(id)
      break;

    case 'add':
      // Call addContact(name, email, phone)
      break;

    case 'remove':
      // Call removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
