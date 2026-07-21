// import React from 'react'

const counter = () => {
    
    let count = 0;
    function handleIncrement() {
        count += 1;
    }
  return (
    <div>
        <h3>Count - {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default counter