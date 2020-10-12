import React from 'react'

export default function HooksCounter3(){
    
    // DEALING WITH OBJECTS
    // key difference btw hooks and class conponents:
    // useState doesn't automatically merge and update the object
    // Hence we need to manually merge

    const [name, setName] = React.useState({firstname:'', lastname:''})

    return(
        <form>
            <input type="text" value={name.firstname} onChange={(e) => setName({...name, firstname: e.target.value})}/>
            <input type="text" value={name.lastname} onChange={(e) => setName({...name, lastname: e.target.value})}/>
            <h3>First name is - {name.firstname}</h3>
            <h3>Last name is - {name.lastname}</h3>
        </form>
    )
}