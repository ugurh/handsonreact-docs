const RenderProps = (props) => {
  return (
    <div style={{ width: 250, height: 100, border: "1px solid black" }}>
      {props.render && props.render()}
      {props.children}
    </div>
  );
};

export default RenderProps;
