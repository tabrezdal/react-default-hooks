import React, { useState } from 'react'

const UseState_input = () => {

    const [text, updateText] = useState("Box is blank!");
    const updateTXT = (e) => {
        updateText(e.target.value);
    }

  return (
    <div>
        <h1>Use State with Input</h1>
        <input onChange={updateTXT}></input>
        <p>{text}</p>
    </div>
  )
}

export default UseState_input