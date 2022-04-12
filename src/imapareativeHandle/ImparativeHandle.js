import React, { useRef } from 'react'
import Button from './Button'

const ImparativeHandle = () => {
    const buttonRef = useRef(null);
  return (
    <div>
        <h1>ImparativeHandle Hook</h1>
        <button onClick={() => buttonRef.current.TextToggler()} >Parent Button</button>
        <Button ref={buttonRef} />
    </div>
  )
}

export default ImparativeHandle