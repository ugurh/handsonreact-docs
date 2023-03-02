const SplitPane = (props) => {
  return (
    <div className="splitPane">
      <div className="splitPane-left">{props.left}</div>
      <div className="splitPane-right">{props.right}</div>
    </div>
  );
};

export default SplitPane;
