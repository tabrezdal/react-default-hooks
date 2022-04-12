import React, { useState, useImperativeHandle, forwardRef } from 'react'

const Button = forwardRef((props, ref) => {

    const [toggle, setText] = useState(false);

    useImperativeHandle( ref, () => ({
        TextToggler(){
            setText(!toggle);
        }
    }))

    // const onClick = () =>{
    //     setText(!toggle);
    // }
    
  return (
    <div>
        <button>Child Button</button>
        {toggle && <p>Text Toggled</p>}
    </div>
  )
})

export default Button