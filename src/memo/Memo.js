import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';

const Memo = () => {

    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }, []);


    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestname = "";

        for(let i=0; i < comments.length ; i++){
            let currentName = comments[i].name;
            if (currentName.length > longestname.length){
            longestname = currentName;
        }
    }

    console.log("Calculated Resulted")

    return longestname;
    };
    
    const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div>
        <h1>Memo Hook</h1>
        <p> {getLongestName}  </p>

        <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle Text
      </button>
      {toggle && <h1> Text Toggled </h1>}

    </div>
  )
}

export default Memo