// import React from 'react'

import { useState } from "react"

const profile = () => {

    const [user,setUser] = useState({
        name : "user",
        age : 0
    })

    // const user = {name:"Anshika", age:20}
    // console.log("Original ",user);

    // let copy = {...user}
    // console.log("Copy ",copy);
  return (
    <div>
        <h2>Name : {user.name}</h2>
        <h2>Age : {user.age}</h2>
        <input placeholder="Enter Your Name" onChange={(e) => setUser({...user, name:e.target.value})}/>
        <button onClick={() => setUser({...user, age:user.age+1})}>Increase Age</button>
    </div>
  )
}

export default profile