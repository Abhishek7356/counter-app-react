import React, {  useState } from 'react'

function Main() {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter + 1);
    }
    const decrementCount = () => {
        if(counter != 0){
            setCounter(counter - 1);
        }
    }
    const resetCount = () => {
        setCounter(0);
    }

    return (
        <div className='m-5 p-5'>
            <div className='counter p-5 m-5'>
                <h3>Counter App</h3>
                <h1>{counter}</h1>
                <button onClick={incrementCount} className='btn btn-primary mt-3'>Increment</button>
                <button onClick={resetCount} className='btn btn-dark ms-2 mt-3'>Reset</button>
                <button onClick={decrementCount} className='btn btn-warning ms-2 mt-3'>Decrement</button>
            </div>
        </div>
    )
}

export default Main