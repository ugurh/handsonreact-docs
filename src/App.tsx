import "./App.css";
import Box from "./projects/js/Box";
import Clock from "./projects/js/Clock";
import ClockDisplay from "./projects/js/ClockDisplay";
import Data from "./projects/js/Data";

function App() {
  return (
    <div className="container">
      <ClockDisplay />
      <Clock/>
      <Box/>
      <Data />
    </div>
  );
}

export default App;
