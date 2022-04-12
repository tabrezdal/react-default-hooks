import React, { useEffect, useLayoutEffect, useRef } from 'react';

const UseLayout = () => {

    const inputRef = useRef(null);


    useEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useLayoutEffect(() => {
        inputRef.current.value = "New Text";
    }, []);
    

  return (
    <div>
        <h1>useLayout Hooks</h1>
        <input type="text" value="Hello" ref={inputRef}></input>
    </div>
  )
}

export default UseLayout