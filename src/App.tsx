import "./App.css";
import Box from "./projects/js/Box";
import Clock from "./projects/js/Clock";
import ClockClass from "./projects/js/ClockClass";
import ClockDisplay from "./projects/js/ClockDisplay";
import ClockTime from "./projects/js/ClockTime";
import Data from "./projects/js/Data";

function App() {
  return (
    <div className="container">
      <ClockClass />
      <ClockTime />
      <ClockDisplay />
      <Clock/>
      <Box/>
      <Data />
    </div>
  );
}

export default App;
