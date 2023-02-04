import { Component } from "react";

class DropdownMenuC extends Component {
  state = {
    isOpen: false,
  };

  handleMenu = () => {
    this.setState((state) => {
      return { isOpen: !state.isOpen };
    });
  };

  render() {
    let menu;
    if (this.state.isOpen) {
      menu = (
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      );
    }

    return (
      <div>
        {this.state.isOpen && menu}
        <button onClick={this.handleMenu}>Menu</button>
      </div>
    );
  }
}

export default DropdownMenuC;
