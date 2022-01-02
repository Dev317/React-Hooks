import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    
    // re-renders when count changes
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                console.log("API called!");
                setData(res.data[0].email);
            });
    }, [count]);
    //    ^
    //  dependency
    
    return (
        <div>
            Email: {data}
            <h2>{count}</h2>
            <button onClick={() => {setCount(count + 1);}}>Increment</button>
        </div>
    );
}

export default UseEffect;