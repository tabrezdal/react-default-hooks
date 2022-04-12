import React from 'react'

const User = ({ username }) => {
  return (
    <div>
        <h1>user : {username}</h1>
        {/* not getting update, could not find reason */}
    </div>
  )
}

export default User