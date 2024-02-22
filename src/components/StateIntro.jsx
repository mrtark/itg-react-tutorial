import React, { useState } from 'react'

function StateIntro() {

    const [counter, setCount] = useState(1);

    const increase = () => {
        setCount(counter + 1);
    }

    return (
        <>
            <div className='mt-4'>
                <h2>Counter : {counter}</h2>
                <hr />
                <button onClick={increase}>increase</button>
                <button onClick={() => increase()}>increase alt</button>
                <button onClick={() => setCount(counter + 1)}>increase alt</button>
            </div>
        </>
    )
}

export default StateIntro