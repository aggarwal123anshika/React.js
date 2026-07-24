// import React from 'react'

import { useState } from "react"

const UpdateFunction = () => {
    let [name, setName] = useState("User")
    function handleClick() {
        setName('Anshika')
        console.log(name);
    }
  return (
    <div>
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Click to change name</button>
    </div>
  )
}

export default UpdateFunction