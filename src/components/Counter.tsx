import Image from 'next/image';
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counter">
            <button className="counter-button" onClick={decrement}>
                <Image src="/icons/minus.svg" width={16} height={16} alt='icon' />
            </button>
            <div className="counter-value">{count}</div>
            <button className="counter-button" onClick={increment}>
                <Image src="/icons/plus.svg" width={16} height={16} alt='icon' />
            </button>
        </div>
    );
}

export default Counter;
