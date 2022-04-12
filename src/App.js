import React, { useEffect } from 'react'
import UseState from './useState/UseState';
import UseStateInput from './useState/UseState_input';
import UseReducer from './useReducer/UseReducer';
import UseEffect from './useEffect/UseEffect';

const App = () => {
  return (
    <div>
        <UseState/>
        <UseStateInput />
        <UseReducer />
        <UseEffect />
    </div>
    
  )
}

export default App