import React, { useState } from "react";

const UseState = () => {
    const [ counter, setCounter ] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value);
        setCounter(newValue);
    }

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <input placeholder="Enter a value" onChange={handleInputChange}></input>
            <div>
                <h2>{counter}</h2>
            </div>
        </div>
    );
}

export default UseState;