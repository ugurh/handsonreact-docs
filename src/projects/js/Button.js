import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClickMe = this.handleClickMe.bind(this);
  }
  handleClickMe = (e) => {
    alert("Clicked!");
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClickMe(e)}>Click Me</button>
      </div>
    );
  }
}

export default Button;
