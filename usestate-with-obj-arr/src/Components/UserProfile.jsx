// import React from 'react'

import { useState } from "react"

const UserProfile = () => {
    const [user,setUser] = useState({
        name : "Anshika",
        address : {
            city : "ghaziabad",
            pincode : 201206
        }
    })
let changeCity = () => {
    setUser({
        ...user,
        address:{
            ...user.address,
            city:"Lucknow"
        }
    })
}
  return (
    <div>
        <h2>{user.name}</h2>
        <p>{user.address.city}</p>
        <button onClick={changeCity}>Switch Location</button>
    </div>
  )
}

export default UserProfile