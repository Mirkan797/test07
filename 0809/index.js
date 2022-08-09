// Counter 컴포넌트의 기능
// 1. 증감하는 기능
// 2. 부모 컴포넌트에게 메세지를 전달하는 기능

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span style={{ fontSize: 40 }}>{count}</span>
            <button>+</button>
            <button>-</button>
        </div>
    );
}

export default Counter;