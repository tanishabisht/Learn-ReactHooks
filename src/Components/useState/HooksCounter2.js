import React from 'react'

export default function HooksCounter2(){

    // PREVSTATE
    // If u want to increment the state value based on previous state value always take this safer option 
    // of passing prevState value as a function

    const [count, setCount] = React.useState(0)    

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount+1)
        }
    }

    return(
        <div>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
            <button>Count: {count}</button>
            <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}