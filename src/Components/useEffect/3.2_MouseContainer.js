import React from 'react'
import MousePosition from './3_MousePosition'

export default function MouseContainer(){

    // MIMICKING COMPONENTDIDUNMOUNT()
    // function returend by 1st parameter function of useEffect() is our cleanUp function ... and acts as componentDiDUnmount

    const [display, setDisplay] = React.useState(true)

    return(
        <div>
            <button onClick={() => setDisplay(prevDisplay => !prevDisplay)}>Toggle Mouse Position</button>
            {display && <MousePosition/>}
        </div>
    )
}