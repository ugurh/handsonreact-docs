import { useEffect, useState } from "react";

const ClockTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const refresh = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const timerID = setInterval(refresh, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  
  return <div><p>{time}</p></div>;
};

export default ClockTime;
