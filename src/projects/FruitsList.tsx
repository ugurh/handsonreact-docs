import FruitListItem from "./FruitListItem";

interface FruitItem {
  id: number;
  name: string;
}

export interface Props {
  fruits: FruitItem[];
}

const FruitsList = (props: Props) => {
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
};

export default FruitsList;
