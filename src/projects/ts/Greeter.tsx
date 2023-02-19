import React from "react";

export interface Props {
  name: string;
  level?: number;
}

const Greeter: React.FC<Props> = (props) => {

  const { name, level } = props;

  return (
    <div className="container">
      Hello {name} - {level}
    </div>
  );
}

export default Greeter;
