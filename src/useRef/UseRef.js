import React, { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef(null);
    const onClick = () => {
        console.log(inputRef.current.value); //prints current value in console onlclick button
        inputRef.current.focus(); //will focus textbox onlclick button
        inputRef.current.value = ""; // clears the input field onlclick button
    }

  return (
    <div>
        <h1>useRef Hook</h1>
        <input type="text" ref={inputRef} placeholder="Enter text here..."/>
        <button onClick = { onClick } >Click Me</button>
    </div>
  )
}

export default UseRef