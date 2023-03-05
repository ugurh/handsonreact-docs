export function wrapper(Inner, value) {
  function Outer(props) {
    return (
      <div>
        <h3>Outer</h3>
        <Inner {...props} /> <em>{value}</em>
      </div>
    );
  }
  return Outer;
}
