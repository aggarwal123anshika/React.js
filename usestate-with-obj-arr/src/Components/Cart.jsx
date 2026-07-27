// import React from 'react'

import { useState } from "react"

const Cart = () => {
    let [cart, setCart] = useState([
        {id:1, name:"Mobile", price:20000, qty:1},
        {id:2, name:"Laptop", price:50000, qty:1},
        {id:3, name:"HeadPhones", price:1500, qty:1}
    ])

    const increaseQty = (id) => {
        setCart(
            cart.map((item) => item.id===id ? {...item,qty:item.qty+1}: item)
        )
    }
  return (
    <div>
        <h1>Hello Ji</h1>
        {
            cart.map((item) => {
                return <div key={item.id}>
                    {item.name} - {item.qty}
                    <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
            })
        }
        {/* homework :- new item add -> cart -> form -> object properties 
        -> submit -> {} -> object -> array add krega */}
    </div>
  )
}

export default Cart