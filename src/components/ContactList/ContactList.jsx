import { Contact } from './Contact.jsx';
import { List } from '../ContactList/ContactList.js';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};
