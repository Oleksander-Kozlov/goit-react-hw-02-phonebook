export const Filter = ({ value, filter }) => {
  return (
    <div>
      <label htmlFor="">
        Find contacts by name
        <input name="filter" type="text" value={value} onChange={filter}/>
      </label>
    </div>
  );
};
