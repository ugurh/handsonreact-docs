import React from "react";


function ID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const initialItems = [
  new Item(ID(), "First Item"),
  new Item(ID(), "Second Item"),
  new Item(ID(), "Third Item"),
];

class ListItem extends React.Component {
  render() {
    const { item, onEdit, onRemove } = this.props;
    return (
      <p>
        <span>{item.name}</span>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onRemove(item)}>Remove</button>
      </p>
    );
  }
}
class List extends React.Component {
  state = {
    editingItem: null,
  };

  handleEditClick = (item) => {
    this.setState({ editingItem: item });
  };

  handleCancel = (item) => {
    this.setState({ editingItem: null });
  };

  render() {
    const { items, onRemove, onUpdate } = this.props;
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item === this.state.editingItem ? (
              <Form
                item={item}
                onSubmit={onUpdate}
                onCancel={this.handleCancel}
              />
            ) : (
              <ListItem
                item={item}
                onEdit={this.handleEditClick}
                onRemove={onRemove}
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

class Form extends React.Component {
  state = {
    inputValue: this.props.item.name || "",
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ inputValue: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: this.props.item ? this.props.item.id : ID(),
      name: this.state.inputValue,
    };

    this.props.onSubmit(item);
    this.setState({ inputValue: "" });
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.onCancel();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button>{this.props.buttonValue || "Save"}</button>
        {this.props.onCancel && (
          <a href="#" onClick={this.handleCancel}>
            cancel
          </a>
        )}
      </form>
    );
  }
}

class ContainerClass extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.setState({ items: initialItems });
  }

  addItem = (item) => {
    this.setState((state) => ({ items: [...state.items, item] }));
  };

  updateItem = (updatedItem) => {
    this.setState((state) => {
      let items = state.items.map((item) => {
        return item.id === updatedItem.id
          ? Object.assign({}, item, updatedItem)
          : item;
      });
      return { items };
    });
  };

  removeItem = (removeThisItem) => {
    this.setState((state) => {
      const items = state.items.filter((item) => item.id != removeThisItem.id);
      return { items };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form item="" onSubmit={this.addItem} buttonValue="Add" />
        <List
          items={this.state.items}
          onRemove={this.removeItem}
          onUpdate={this.updateItem}
        />
      </React.Fragment>
    );
  }
}

export default ContainerClass;
