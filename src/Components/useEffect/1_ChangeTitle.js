import React from 'react'

export default function ChangeTitle(){

    // useEffect()
    // function parameter of useEffect() runs after every render

    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        document.title = `U clicked ${count} times`
    })

    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount+1)}> Counter {count} </button>
        </div>
    )
}