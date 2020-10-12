import React from 'react'
import Component2 from './Component2'


// createContext()
// creates container to store the value of variable  
export const FirstNameContext = React.createContext()
export const LastNameContext = React.createContext()


export default function Component1(){
    return(
        <div>
            Inside Component1: context is initialized here
            <FirstNameContext.Provider value={'Tanisha'}>
                <LastNameContext.Provider value={'Bisht'}>
                    <Component2/>
                </LastNameContext.Provider>
            </FirstNameContext.Provider>
        </div>
    )
}