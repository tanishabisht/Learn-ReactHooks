import React from 'react'

export default function MousePosition(){

    // MIMICKING COMPONENTDIDMOUNT()
    // if 2nd parameter of useEffect() is an empty array ... useEffect() will act as componentDiDMount

    // MIMICKING COMPONENTDIDUNMOUNT()
    // function returend by 1st parameter function of useEffect() is our cleanUp function ... and acts as componentDiDUnmount

    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)

    const mousePositionHandler = (e) => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    React.useEffect(() => {
        console.log('useEffect - component re-rendered')
        window.addEventListener('mousemove', mousePositionHandler)

        return () => {
            console.log('useEffect - component unmount')
            window.removeEventListener('mousemove', mousePositionHandler)
        }
    }, [])

    return(
        <div>
            <h3>X - {x} ; Y - {y}</h3>
        </div>
    )
}