import React, { useEffect, useReducer } from 'react'
import UseState from './useState/UseState';
import UseStateInput from './useState/UseState_input';
import UseReducer from './useReducer/UseReducer';
import UseEffect from './useEffect/UseEffect';
import UseRef from './useRef/UseRef';

const App = () => {
  return (
    <div>
        <UseState/>
        <UseStateInput />
        <UseReducer />
        <UseEffect />
        <UseRef />
    </div>
    
  )
}

export default App