import React from "react";
import Form from "./Form";
import ListItem from "./ListItem";

const List = ({ items, onRemove, onUpdate }) => {
  const [editingItem, setEditingItem] = React.useState(null);

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item === editingItem ? (
            <Form item={item} onSubmit={onUpdate} onCancel={handleCancel} />
          ) : (
            <ListItem item={item} onEdit={handleEdit} onRemove={onRemove} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
