import { useState } from 'react';

export function Test() {
    const [state, setState] = useState(1);
    return (
        <>
            <p>state: {state}</p>
            <button onClick={() => setState(state + 1)}></button>
        </>
    );
}
