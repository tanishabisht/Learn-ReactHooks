import React from 'react'

export default function HooksCounter(){

    const [counter, setCounter] = React.useState(0)

    return(
        <div>
            <button onClick={() => setCounter(counter+1)}> Counter {counter} </button>
        </div>
    )
}