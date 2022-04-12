import React, { useEffect, useReducer } from 'react'
import UseState from './useState/UseState';
import UseStateInput from './useState/UseState_input';
import UseReducer from './useReducer/UseReducer';
import UseEffect from './useEffect/UseEffect';
import UseRef from './useRef/UseRef';
import UseLayout from './useLayout/UseLayout';
import ImparativeHandle from './imapareativeHandle/ImparativeHandle';
import Context from './context/Context';


const App = () => {
  return (
    <div>
        <UseState/>
        <UseStateInput />
        <UseReducer />
        <UseEffect />
        <UseRef />
        <UseLayout />
        <ImparativeHandle />
        <Context />
    </div>
    
  )
}

export default App