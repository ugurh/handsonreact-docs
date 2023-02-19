import { any } from "prop-types";
import { Component } from "react";

export interface Props {
  fruit: FruitItem;
}

interface FruitItem {
  id: number;
  name: string;
}

const handleOnclickItem = (e: EventSourceInit, id: number) => {
  console.log(`removed ${id}`);
  console.log(e);
};
class FruitListItem extends Component<Props> {
  render() {
    const fruit = this.props.fruit;
    return <li onClick={(e:any) => handleOnclickItem(e, fruit.id)}>{fruit.name}</li>;
  }
}

export default FruitListItem;
