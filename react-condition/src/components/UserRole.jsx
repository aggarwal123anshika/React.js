// import React from 'react'
import Admin from "./Admin"
import Seller from "./Seller"
import User from "./User"

const UserRole = ({role}) => {
  return (
    <div>
        { //curly brackets ek expression ya value return krte hai
         role === "admin" ? <Admin/> : role === "seller" ? <Seller/> : <User/>}

    </div>
  )
}

export default UserRole