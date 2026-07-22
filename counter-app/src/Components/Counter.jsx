// import React from 'react'
// import { useState } from "react"
// useState ka main work h ki componenet ko rerender
//  krana aur initial value ko change krna
// useState m 2 cheeze hoti h first one is count value ..
// iski value change krna withour setCount function,

import { useState } from "react"

//  and second one is setCount value means state change krna and rerender karna
const counter = () => {
    // const arr = useState(5);
    // console.log(arr);
    let[count,setCount] = useState(0);
    function handleIncrement() {
      setCount(count+1)
    }
    function handleDecrement() {
      setCount(count-1)
    }
    function resetHandling() {
      setCount(0)
    }
  return (
    <div>
        <button onClick={handleDecrement}>Decrement</button>
        <h3>Count - {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onDoubleClick={resetHandling}>Reset</button>
        {/* <h1>Count - {arr[0]}</h1> */}
    </div>
  )
}

export default counter