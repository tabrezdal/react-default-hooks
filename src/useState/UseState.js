import React, { useState } from 'react'

const UseState = () => {

    const [topic, setState] = useState("React Hooks");

    const setTxt = () => {
        setState("Default React Hooks")
    }
  return (
    <div>
    <h1>useState</h1>
    <p>Hello, Welcome to {topic} Learning!</p>
    <button onClick={setTxt}>Click Me</button>
    </div>
  )
}

export default UseState