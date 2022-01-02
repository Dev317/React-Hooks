import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alter() {
            setToggle(!toggle);
        }
    }));

    return (
        <div>
            <button>
                Button from Children
            </button>
            {toggle && <span>Toggle</span>}
        </div>
    );
});

export default Button;