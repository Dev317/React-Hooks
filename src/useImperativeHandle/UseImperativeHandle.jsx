import React, { useRef } from "react";
import Button from "./Button";

const UseImperativeHandle = () => {
    const buttonRef = useRef(null);
    
    // clicking parent button can display text, instead of clicking children button
    return (
        <div>
            <button onClick={() => {buttonRef.current.alter()}}>Button from Parent</button>
            <Button ref={buttonRef}/>
        </div>
    );
};

export default UseImperativeHandle;