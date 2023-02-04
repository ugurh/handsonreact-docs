import { Component } from "react";

class ClockClass extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  
  refresh = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };

  componentDidMount() {
    this.timerID = setInterval(this.refresh, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default ClockClass;
