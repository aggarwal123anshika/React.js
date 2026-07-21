// import React from 'react'

const GreetUser = ({name}) => {
    function sendGreetings() {
        // alert("props ki value ko capture krega..")
        alert(`Hello ${name}`)
    }
  return (
    <div>
        <button onClick={sendGreetings}>Greet Me!!</button>
    </div>
  )
}

export default GreetUser