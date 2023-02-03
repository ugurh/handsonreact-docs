import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  const handleAddMinutes = (minutes) =>{
    setTime(addMinutes(time, minutes));
  }

  const handleSubractMinutes = (minutes) =>{
    setTime(subractMinutes(time, minutes))
  }
  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={() => handleSubractMinutes(10)}>-10 Minutes</button>
      <button onClick={() => handleAddMinutes(10)}    >+10 minutes</button>
    </div>
  );
};

function addMinutes(date, minutes){
    return new Date(date.getTime() + minutes * 60000);
}

function subractMinutes(date, minutes){
    return new Date(date.getTime()- minutes * 60000);
}

export default Clock;
