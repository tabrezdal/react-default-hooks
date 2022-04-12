import React, { useState } from 'react'
import Login from './Login'
import User from './User'

const Context = () => {
    
    const [username, setUsername] = useState("");

  return (
    <div>
        <h1>Context Hook</h1>
        <Login username={username} />
        <User setUsername={setUsername}/>
    </div>
  )
}

export default Context