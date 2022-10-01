import React from 'react';
import {useState} from 'react';

function MainPage(props) {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Main Page - {count}</h1>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default MainPage;