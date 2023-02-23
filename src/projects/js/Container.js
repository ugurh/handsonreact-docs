import React from "react";
import Form from "./Form";
import ID from "./ID";
import { Item } from "./Item";
import List from "./List";

const initialItems = [
  new Item(ID(), "First Item"),
  new Item(ID(), "Second Item"),
  new Item(ID(), "Third Item"),
];

const Container = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => setItems(initialItems), []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (updatedItem) => {
    let updatedItems = items.map((item) => {
      return item.id === updatedItem.id
        ? Object.assign({}, item, updatedItem)
        : item;
    });
    return setItems(updatedItems);
  };

  const removeItem = (removeThisItem) => {
    const filteredItems = items.filter((item) => item.id != removeThisItem.id);
    setItems(filteredItems);
  };

  return (
    <React.Fragment>
      <Form item="" onSubmit={addItem} buttonValue="Add" />
      <List items={items} onRemove={removeItem} onUpdate={updateItem} />
    </React.Fragment>
  );
};

export default Container;
