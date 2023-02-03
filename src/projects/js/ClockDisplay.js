import { Component } from "react";

class ClockDisplay extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  handleClick = () => {
    this.setState({
        time: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <button onClick={this.handleClick}>Refresh</button>
      </div>
    );
  }
}

export default ClockDisplay;
