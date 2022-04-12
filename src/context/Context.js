import React, { useState, createContext } from 'react'
import Login from './Login'
import User from './User'

const Context = () => {
    const AppContext = createContext(null);

    const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
    </AppContext.Provider>
  )
}

export default Context