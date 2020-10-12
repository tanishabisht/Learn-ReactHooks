import React from 'react';

// useState
import HooksCounter from './Components/useState/HooksCounter'
import HooksCounter2 from './Components/useState/HooksCounter2'
import HooksCounter3 from './Components/useState/HooksCounter3';
import HooksCounter4 from './Components/useState/HooksCounter4';

// useEffect
import ChangeTitle from './Components/useEffect/1_ChangeTitle'
import ConditionallyCallUseEffect from './Components/useEffect/2_ConditionallyCallUseEffect'
import MouseContainer from './Components/useEffect/3.2_MouseContainer'
import DataFetching from './Components/useEffect/4_DataFetching'

// useContext
import Component1 from './Components/useContext/Component1'


function App() {
  return (
    <div>
      <h2>******useState()******</h2>
      <HooksCounter/><br/>
      <HooksCounter2/><br/>
      <HooksCounter3/><br/>
      <HooksCounter4/><br/><br/>

      <h2>******useEffect()******</h2>
      <ChangeTitle/><br/>
      <ConditionallyCallUseEffect/><br/>
      <MouseContainer/><br/>
      <DataFetching/><br/><br/>

      <h2>******useContext()******</h2>
      <Component1/>
            
    </div>
  );
}

export default App;
