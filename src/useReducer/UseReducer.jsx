import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count : state.count + 1, showText : state.showText};
        case "TOGGLE_SHOWTEXT":
            return {count : state.count, showText : !state.showText};
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        count : 0,
        showText : true
    });

    return (
        <div>
            <h2>{state.count}</h2>

            <button onClick={() => {
                dispatch({ type : "INCREMENT"});
                dispatch({ type : "TOGGLE_SHOWTEXT"});
            }}>
                Increment toggling
            </button>

            {state.showText && <p>Toggled text</p>}
        </div>
    );
};

export default UseReducer;