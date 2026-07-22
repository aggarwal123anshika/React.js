// import React from 'react'

import { useState } from "react"
import WelcomeUser from "./WelcomeUser";

const Theme = () => {

    const[dark, setDark] = useState(false);
    function handleToggle() {
        setDark(!dark);
    }

  return (
    <div style={{background : dark ? "black" : "white",
        color:dark ? "white" : "black"
    }}>
        <WelcomeUser />
        <br />
        <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  )
}

export default Theme