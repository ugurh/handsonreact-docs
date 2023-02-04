const Child = (props) => {
  const handleClick = () => {
    props.onRequest("Can I have the car?");
  };

  return (
    <div>
      <h2>Child</h2>
      <p>{props.words}</p>
      <button onClick={handleClick}>Ask for the car</button>
    </div>
  );
};

export default Child;
