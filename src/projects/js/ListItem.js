const ListItem = ({ item, onEdit, onRemove }) => {
  return (
    <p>
      <span>{item.name}</span>
      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={() => onRemove(item)}>Remove</button>
    </p>
  );
};

export default ListItem;
