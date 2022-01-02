import React, { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef(null);

    const handleOnClick = () => {
        // console.log(inputRef.current.value);
        // inputRef.current.focus();
        inputRef.current.value = "";
    };

    return (
        <div>
            <h2>Name</h2>
            <input type="text" placeholder="..." ref={inputRef}/>
            <button onClick={handleOnClick}>Change name</button>
        </div>
    );
};

export default UseRef;