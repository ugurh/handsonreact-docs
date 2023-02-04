import "./App.css";
import Box from "./projects/js/Box";
import Clock from "./projects/js/Clock";
import ClockClass from "./projects/js/ClockClass";
import ClockDisplay from "./projects/js/ClockDisplay";
import ClockTime from "./projects/js/ClockTime";
import ConditionalRendering from "./projects/js/ConditionalRendering";
import Data from "./projects/js/Data";
import DropdownMenu from "./projects/js/DropdownMenu";
import DropdownMenuC from "./projects/js/DropdownMenuC";

function App() {
  return (
    <div className="container">
      <DropdownMenuC /> 
      <DropdownMenu />
      <ConditionalRendering /> 
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
