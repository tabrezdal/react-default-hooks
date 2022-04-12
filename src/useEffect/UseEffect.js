import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffect = () => {

  const [data, setData] = useState();
  const [count, setCount] = useState(0);

  useEffect (() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res.data);
      setData(res.data[0].email) //want to know how to fetch specific item with counter number
    })
  }, []) // ',[]' to stop making API Resuest Everytime page renders

   return (
    <div>
        <h1>useEffect Hook</h1>
        <h3> { count }</h3>
        <p> { data }</p>
        <button onClick={ () => setCount(count + 1)}>Update</button>
    </div>
  )
}

export default UseEffect