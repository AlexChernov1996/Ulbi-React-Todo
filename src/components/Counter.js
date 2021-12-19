import React, {useState} from 'react';

const Counter = () => {
    let [count, setCount] = useState(0)
    let inc = () => {
        setCount(count + 1)
    }
    let dec = () => {
        setCount(count - 1)
    }
    return (
        <div>

            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    );
};

export default Counter;
