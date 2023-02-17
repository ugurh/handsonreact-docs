import React, { useState } from 'react';

const Clock1 = () => {
    const [time, setTime] = useState(new Date());
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    const handleIncreaseTime = () =>{
        setTime(new Date(time.getTime() + 10 * 60000))
    }
    return (
        <div>
            <p>Time : {time.toLocaleTimeString()}</p>
            <p>{todos[0].text}</p>
            <button onClick={handleIncreaseTime}>+10 Minutes</button>
        </div>
    );
};

export default Clock1;