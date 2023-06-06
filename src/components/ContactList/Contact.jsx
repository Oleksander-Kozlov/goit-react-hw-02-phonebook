import { CotactItem, ButtonDelete } from '../ContactList/Contact';

export const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <CotactItem>
      
        {name}: {number}{' '}
        <ButtonDelete onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
      
    </CotactItem>
  );
};
