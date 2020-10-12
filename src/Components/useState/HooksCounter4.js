import React from 'react'

export default function HooksCounter4(){

    // DEALING WITH ARRAYS
    // key difference btw hooks and class conponents:
    // useState doesn't automatically merge and update the object
    // Hence we need to manually merge

    const [items, setItems] = React.useState([])

    return(
        <div>
            <button onClick={() => setItems([...items, {id: items.length , value: Math.floor(Math.random()*100)}])}>Add Item</button>
            <ul>
                {items.map( item => <li key={item.id}>{item.value}</li>)}
            </ul>            
        </div>
    )
}