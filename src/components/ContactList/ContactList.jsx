import { Contact } from './Contact.jsx';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
