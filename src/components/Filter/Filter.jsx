import {
  
  Input,
  Label,
  
} from '../ContactForm/ContactForm';
export const Filter = ({ value, filter }) => {
  return (
    <div>
      <Label htmlFor="">
        Find contacts by name
        <Input name="filter" type="text" value={value} onChange={filter} />
      </Label>
    </div>
  );
};
