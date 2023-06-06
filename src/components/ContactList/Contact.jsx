export const Contact = ({ name, number, onDeleteContact, id}) => {
  return (
    <li>
      {name}: {number}{' '}
      <button onClick={() => onDeleteContact(id)}>delete</button>
    </li>
  );
};