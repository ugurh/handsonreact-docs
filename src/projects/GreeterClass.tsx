import { Component, SyntheticEvent } from "react";

export interface Props {
  name: string;
  level?: number;
  isLogin: boolean;
}

interface State {
  isLogin: boolean;
}

class GreeterClass extends Component<Props, State> {
  state = { isLogin: this.props.isLogin };

  onDecrement = (event: SyntheticEvent) => {
    console.log(event);
    this.setState({ isLogin: true });
  };

  onIncrement = (event: SyntheticEvent) => {
    console.log(event.target);
    this.setState({ isLogin: false });
  };

  render() {
    const { name } = this.props;

    return (
      <div>
        {name}
        <br/>
         <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}

export default GreeterClass;
