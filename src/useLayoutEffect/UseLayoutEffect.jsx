import React, { useLayoutEffect, useEffect, useRef } from "react";

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    // useLayoutEffect is called first
    useLayoutEffect(() => {
        // console.log("useLayoutEffect");
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        // console.log("useEffect");
        inputRef.current.value = "Hello";
    }, [])

    return (
        <div>
            <input ref={inputRef} value="Minh"></input>
        </div>
    );
};

export default UseLayoutEffect;