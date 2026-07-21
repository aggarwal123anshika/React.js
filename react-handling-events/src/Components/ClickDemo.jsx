// import React from 'react'
// react arrow function component export
const ClickDemo = () => {

    function showMessage() {
        alert("button clicked!!");

    }

  return (
    <div>
        <button onClick={showMessage}>Click Me!</button>
    </div>
  )
}

export default ClickDemo