import React from 'react'

export default function ConditionallyCallUseEffect(){

    // 2nd parameter of useEffect()
    // is array of props/ state you need to change with every render after first by-default render ... similar to componentDidMount+componentDidUpdate
    // the props/state not mentioned will be rendered only once ... similar to componentDidMount

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('')

    React.useEffect(() => {
        console.log('useEffect - document is re-rendered')
        document.title = `U clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => setCount(prevCount => prevCount+1)}> Counter {count} </button>
        </div>
    )
}