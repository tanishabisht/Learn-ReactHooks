import React from 'react'
import {FirstNameContext, LastNameContext} from './Component1'

export default function ChangeTitle(){

    // useContext()
    // returns the value inside the parameter (parameter is a context)

    const firstName = React.useContext(FirstNameContext)
    const lastName = React.useContext(LastNameContext)    

    return(
        <div>
            Inside Component3: {firstName} {lastName}
        </div>
    )
}